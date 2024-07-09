import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useTheContext } from '../../Context/ContextProducts';
import out from "../../assets/out.svg";
import carrito from "../../assets/carrito.svg";
import compra from "../../assets/compra.svg";
import Swal from 'sweetalert2';
import { useEffect, useRef, useState } from 'react';

function ComplExt() {

  const {ProductsExtern} = useTheContext();

  const [ids, setId] = useState("fff");

  let contador = useRef(0);

  const hhh = useRef()
  const jjj = useRef([])

  const [Modal, setModal] = useState(false);


  function buy() {

    const botones = document.getElementsByClassName('card');
    for (let i = 0; i < botones.length; i++) {
        botones[i].addEventListener("click", function() {
          let btn_actual = this;
          jjj.current = btn_actual.id

          for (const key in ProductsExtern) {
            console.log(jjj);
               if (ProductsExtern[key].id == jjj.current) {
                
                 //Descuento calcu
                 for (let index = 0; index < ProductsExtern[key.Descuento]; index++) {   
                   if (ProductsExtern[key].Descuento > index) {
                    contador.current+1
                  }
                 }
                 let decimal = 0+","+contador;
                 alert(decimal)
                 //let Descuento = porcentajeDescuento * ProductsExtern[key].price;
                 hhh.current = [ProductsExtern[key].Descuento, ProductsExtern[key].price]
               }
          }


          setModal(!Modal)
          
         
          //setId(btn_actual)
          
        });
    } 
  }




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
                  <ListGroup.Item>Marca: {product.Category}</ListGroup.Item>
                  <ListGroup.Item>Marca: {product.brand}</ListGroup.Item>
                  <ListGroup.Item>Stock: {product.stockTotal}</ListGroup.Item>
                  <ListGroup.Item>Fecha de venta: {product.date}</ListGroup.Item>
                  <ListGroup.Item>Descuento: {product.Descuento}%</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                  <Card.Link  onClick={buy}><img src={compra} id={product.id} className='card'/></Card.Link>
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
        
        <dialog open>
          <p>Precio Original: ${hhh.current[1]}</p>
          <p>Descuento: {hhh.current[0]}</p>
          <p>Precio con descuento Aplicado: {hhh.current[2]}</p>
          <button>Comprar</button>
        
        </dialog>
      )}
      </>  

      
  )
}

export default ComplExt;