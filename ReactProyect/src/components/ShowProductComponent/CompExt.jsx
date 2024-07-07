import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useTheContext } from '../../Context/ContextProducts';
import out from "../../assets/out.svg";

function ComplExt() {

    const {ProductsExtern} = useTheContext();

    console.log(ProductsExtern);

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
                  <Card.Link href="#">Comprar</Card.Link>
                  <Card.Link href="#">Añadir al carrito</Card.Link>
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
      
      </>  
  );
}

export default ComplExt;