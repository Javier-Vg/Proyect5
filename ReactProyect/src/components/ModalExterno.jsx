import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Swal from 'sweetalert2'
import putProducts from "../service/CrudProducts/putProducts";


const ModalExterno = ({id, isOpen, closeModal }) => {
    let [stock, setStock] = useState()
    let [nombre, setNombre] = useState()
    let [precio, setPrecio] = useState()
    let [marca, setMarca] = useState()
    let [fecha, setFecha] = useState()
    let [imgUrl, setImg] = useState()
    let [hardware, setHardware] = useState()

  const [modal, setModal] = useState(false);

  function handleChange(e) {
    setStock(e.target.value);
  }

  if (!isOpen) return null;

  async function borrar() {
    alert(id)
    const response = await fetch(`http://localhost:3005/hardwareExterno/${id}`, {
      method: 'DELETE',
    });
    
    Swal.fire({
        icon: "success",
        title: "Eliminado con exito"
    })
  }
  async function edit() {
    setModal(!modal)
    //alert(id)
  }

  const handleClick = () => {
    //Llamo a put
    //Crea el nuevo objeto con los valores modificados
      let ModificProduct = {
          CoP: nombre,
          price: precio,
          stockTotal: stock,
          brand: marca,
          date: fecha,
          img: imgUrl,
          hardwareType: hardware
      }

      //Llama al metodo PUT:
      putProducts(id, ModificProduct, hardware)
  }

  return (

    <>
    { modal && (
        <dialog className="M-intE" open>
          <form>
              <label >Nombre del Componente o Periferico</label>
              <br/>
              <input type="text" onChange={(e) => setNombre(e.target.value)} required/>
                  
              <br />
              <label >Precio del producto</label>
              <br/>
              <input type="text" onChange={(e) => setPrecio(e.target.value)} required/>
              <br />
                  
              <label >Marca del producto</label>
              <br/>
              <input type="text" onChange={(e) => setMarca(e.target.value)} required/>
              <br />
            
              <label >Stock del producto</label>
              <br/>
              <input  type="range" value={stock} onChange={handleChange} required/>
              <p>{stock}</p>
            

              <label >Fecha de iniciado de venta</label>
              <br/>
              <input type="date" onChange={(e) => setFecha(e.target.value)} required/>
              <br />
              <label >Url del producto:</label>
              <br/>
                  <input type="text" onChange={(e) => setImg(e.target.value)} required/>
              <br />
              <div className="divRadios">
                  <div>
                      Externo
                      <input id="radio" className="hardwareExterno" type="radio"  onChange={(e) => setHardware(e.target.className)} name="option" />
                  </div>
                  <div>
                      Interno
                      <input id="radio" className="hardwareInterno" type="radio"  onChange={(e) => setHardware(e.target.className)} name="option"/>
                  </div>
              </div>
              <button onClick={handleClick}>Registrar Producto</button>
          </form>
            
        </dialog>
    )}
    
    <div className="modal">

      <AiOutlineClose
        size={30}
        color="blue"
        onClick={closeModal}
      />
      <div className="containerr">
        <h3>Opciones:</h3>
        <button onClick={borrar}>Eliminar</button>
        <button onClick={edit}>Edit</button>
      
      </div>
    </div>
    </>

    
  );
};

export default ModalExterno;