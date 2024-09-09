import {  useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Swal from 'sweetalert2'
import putProducts from "../../service/CrudProducts/putProducts";
import basura from "../../assets/basura.svg";
import editar from "../../assets/editar.svg";
import getProducts from "../../service/CrudProducts/getProducts";
import deleteProducts from "../../service/CrudProducts/deleteProducts";
import { useNavigate } from "react-router-dom";

const ModalExterno = ({id, isOpen, closeModal }) => {//Se pasa como propiedad el id, una confirmacion de que el modal esta activado y otra si esta desactivado
  //const navigate = useNavigate();
  
  let [datos, setDatos] = useState([])

  //Estados para los diferentes inputs
  let [stock, setStock] = useState()
  let [nombre, setNombre] = useState()
  let [precio, setPrecio] = useState()
  let [marca, setMarca] = useState()
  let [descuento, setDescuento] = useState()
  let [imgUrl, setImg] = useState()

  const [modalExt, setModall] = useState(false);

  //Funcion que hace que capte el input tipo "range" y lo renderize en pantalla
  function handleChange(e) {
    setStock(e.target.value);
  }

  if (!isOpen) return null;//En caso de que el prop sea false, se vuelve true, retorna null, y corta el flujo de ejecucion del modal.

  async function borrar() {//Funcion donde elimino el producto

    //Borrar product:
    const swalWithBootstrapButtons = Swal.mixin({//Alerta de la libreria "Sweat Alert"
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });

    swalWithBootstrapButtons.fire({
      title: "¿Estas seguro de eliminar este producto?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
      reverseButtons: true
    }).then((result) => {
      
      if (result.isConfirmed) {
         swalWithBootstrapButtons.fire({
           title: "Tu producto fue eliminado del sistema.",
           icon: "success"
         });

        deleteProducts(id, "hardwareExterno");
        //Forma de renderizar la pagina
        // navigate("/home")
                        
        // setTimeout(()=> {
        //   navigate("/ExternStorage")
        // },10)
        
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelado",
          text: "Tu producto sigue en el sistema!",
          icon: "error"
        });
      }
    });
  }

  async function edit() { //Funcion que capta los inputs por medio de estado del producto editado
    let respuesta = await getProducts(id, "hardwareExterno");
    //Añado la informacion del get en un hook, para luego utilizarla y darle valor a los inputs de edicion del producto

    setDatos([respuesta.CoP,respuesta.price, respuesta.brand, respuesta.stockTotal, respuesta.img, respuesta.Descuento])
    setModall(!modalExt)//Esconde o muestra el modal depende del click en editar
  }

  const handleClick = () => { //Edita el producto
    //Llamo a put
    //Crea el nuevo objeto con los valores modificados
      let ModificProduct = {
          CoP: nombre,
          price: precio,
          stockTotal: stock,
          brand: marca,
          Descuento: descuento,
          img: imgUrl
      }

      //Llama al metodo PUT:
      putProducts(id, ModificProduct, "hardwareExterno");
  }

  return (

    <>
   { modalExt && ( //Muestra el modal si su estado es true
    
      <dialog className="modalExt" open>
        <form>
          <label >Nombre del Componente o Periferico</label>
          <br/>
          <input placeholder={datos[0]} type="text" onChange={(e) => setNombre(e.target.value)} required/>
                          
          <br />
          <label >Precio del producto</label>
          <br/>
          <input placeholder={datos[1]} type="text" onChange={(e) => setPrecio(e.target.value)} required/>
          <br />
                          
          <label >Marca del producto</label>
          <br/>
          <input placeholder={datos[2]} type="text" onChange={(e) => setMarca(e.target.value)} required/>
          <br />
                  
          <label >Stock del producto</label>
          <br/>
          <input placeholder={datos[3]}  type="range" onChange={handleChange} required/>
          <p>{stock}</p>   

          <label >Descuento del producto:</label>
          <br/>
          <input placeholder={datos[5]} type="text" onChange={(e) => setDescuento(e.target.value)} required/>
          <br />

          <br />
          <label >Url del producto:</label>
          <br/>
          <input placeholder={datos[4]} type="text" onChange={(e) => setImg(e.target.value)} required/>
          <br />
          <br />
                      
          <button style={{marginLeft: "50px", borderRadius: "15px"}} onClick={handleClick}>Editar Producto</button>
        </form>
      </dialog>
    )}
    
    <div className="modal">

      {/*Libreria que se usa para mostrar un modal */}
      <AiOutlineClose 
        size={30}
        color="white"
        onClick={closeModal}
      />

      <div className="containerr">
        <button style={{background: "none", border: "none"}} onClick={borrar}><img src={basura} alt="trash" /></button>
        <button style={{background: "none", border: "none"}} onClick={edit}><img src={editar} alt="edit" /></button>
      </div>
    </div>
    </>

  );
};

export default ModalExterno;