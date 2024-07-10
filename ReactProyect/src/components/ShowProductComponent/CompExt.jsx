import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useTheContext } from '../../Context/ContextProducts';
import out from "../../assets/out.svg";
import carrito from "../../assets/carrito.svg";
import compra from "../../assets/compra.svg";
import Swal from 'sweetalert2';
import { useEffect, useRef, useState } from 'react';
import putPatch from '../../service/putPatch';

function ComplExt() {

  const {ProductsExtern, Users} = useTheContext();
  let sesion = localStorage.getItem("userValid");

  const [unidadesState, setUnidades] = useState()
  const unidadesRef = useRef([])

  //***************** */
  const recarga = useRef([]);
  //******************* */

  let contador = useRef(0);

  const hhh = useRef()
  const jjj = useRef([])
  const stock = useRef([])

  const [Modal, setModal] = useState(false);

  //Resetea el contador al salir del modal
  if (Modal == false) {
    contador.current = 0;
    unidadesRef.current = 0;
  }
  
  function buy() {

    const botones = document.getElementsByClassName('card');
    for (let i = 0; i < botones.length; i++) {
        botones[i].addEventListener("click", function() {
          let btn_actual = this;
          jjj.current = btn_actual.id;
          stock.current = btn_actual.stockTotal;

          for (const key in ProductsExtern) {
              if (ProductsExtern[key].id == jjj.current) {
                
                 //Descuento calculo
                 let PorcentajeDescuento = ProductsExtern[key].Descuento
                 console.log(PorcentajeDescuento);

                 for (let index = 100; index > PorcentajeDescuento; index--) {
                   if (PorcentajeDescuento < index) {
                    contador.current = contador.current + 1
                  }
                 }

                 let DescuentoFinal = ((contador.current / 100) * ProductsExtern[key].price)
                 //let Descuento = porcentajeDescuento * ProductsExtern[key].price;
                 hhh.current = [
                  ProductsExtern[key].Descuento, 
                  ProductsExtern[key].price, 
                  DescuentoFinal, 
                  ProductsExtern[key].img, 
                  ProductsExtern[key].stockTotal,
                  ProductsExtern[key].id 
                ];
              }
          }
          setModal(!Modal);
          //setId(btn_actual)
        });
    } 
  }

  const SeteoUnidades = (e) =>{
    setUnidades(e.target.value);
    unidadesRef.current = [e.target.value];
 }

  const compraRealizada = () =>{

    let unidadesSeleccionadas = unidadesRef.current[0];
    let precioProducto = hhh.current[1];

    let gastoTotal = unidadesSeleccionadas * precioProducto;
    let ChangeStock = hhh.current[4] - unidadesSeleccionadas

    //alert(ChangeStock);
    
    let StockDesaumento = {
      stockTotal: ChangeStock
    }

    
    
    putPatch(hhh.current[5], StockDesaumento, "hardwareExterno");

    for (const key in Users) {
     if (Users[key].id == sesion) {
      console.log(Users[key]);

      let GastoGeneral = {
        compras: ((gastoTotal)+(Users[key].compras))
      }

      putPatch(sesion, GastoGeneral, "users")
     }
    }
  
    setModal(!Modal)

    //alert(gastoTotal)
  };


  function car() {

    Swal.fire({
      text: "¿Quieres agregar este producto al carrito?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Agregado!",
          text: "Agregaste este producto al carrito.",
          icon: "success"
        });
      }
    });
  }

    return (
      <>
      <div className='CompIntDiv'>
        {ProductsExtern.map((product) => {
          return(
            
            <div id="categoria" className='filter' key={product}>
              <Card  style={{ width: '15rem' }}>
                <Card.Img className='imgProducClient' variant="top" src={product.img} />
                <Card.Body>
                    <Card.Title>{product.CoP}</Card.Title>
                    <Card.Text>
                      <strong>${product.price}</strong>
                    
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Categoria: {product.Category}</ListGroup.Item>
                    <ListGroup.Item>Marca: {product.brand}</ListGroup.Item>
                    <ListGroup.Item>Stock: {product.stockTotal}</ListGroup.Item>
                    <ListGroup.Item>Fecha de venta: {product.date}</ListGroup.Item>
                    <ListGroup.Item>Descuento: {product.Descuento}%</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Card.Link onClick={buy}><img src={compra} id={product.id} className='card'/></Card.Link>
                    <Card.Link onClick={car}><img src={carrito} id={product.id} className='card'/></Card.Link>
                </Card.Body>
              </Card>
     
            </div>
          )
        })}

        {ProductsExtern == "" ? (
          (
            <>
            <div style={{ width:" 500px", marginLeft: "450px"}} >
              <h2 style={{margin: "auto", fontFamily: "arial"}}>No hay productos a la venta.</h2>
              <img src={out} alt="out" />
            </div>
            </>   
        )
            
        ) : (
            <p style={{display: "none"}}>A la venta</p>
        )}

      </div>

      {Modal && (
        
        <dialog style={{borderRadius: "14px"}} open>
          <div style={{display: 'grid', gridTemplateColumns: "220px 350px", padding: "20px", border: "3px solid black", borderRadius: "10px"}}>

            <div>
              <img src={hhh.current[3]} style={{width: "200px",  height: "200px", borderColor: "red",border: "5px solid black", borderRadius: "10px"}} />
            </div>

            <div>
              <p style= {{fontSize: "20px"}}>Precio Original: ${hhh.current[1]}</p >
              <p style= {{fontSize: "20px"}}>Descuento: {hhh.current[0]}%</p >
              <p style= {{fontSize: "20px"}}>Precio Final: <p style={{color: "green"}}>${hhh.current[2]}</p></p>
            </div>
          </div>

          <div style={{display: "flex", padding:"10px"}}>
            <div><label >¿Cuantas unidades desea comprar?</label></div>
            <div><input onChange={ e => SeteoUnidades(e)}  type="range" max={hhh.current[4]} style={{width: "200px"}} /></div>
            <div><div>{unidadesState}</div></div>
          </div>

          <button onClick={compraRealizada} style={{backgroundColor: "#48e", color:"white", border: "none", fontSize: "25px", borderRadius: "10px"}}>Comprar</button>
        
        </dialog>
      )}
      </>  

      
  )
}

export default ComplExt;