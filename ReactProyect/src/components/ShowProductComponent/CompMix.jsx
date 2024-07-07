import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useTheContext } from '../../Context/ContextProducts';
import out from "../../assets/out.svg";

function ComplMix() {
    const {Mix} = useTheContext();

    return (
    
      <>
      <div className='CompIntDiv'>
            
        {Mix.map((product) => {
          return(
            <div className='filter' key={product}>
            <Card  style={{ width: '15rem' }}>
                <Card.Img className='imgProducClient' variant="top" src={product.img} />
                <Card.Body>
                    <Card.Title>{product.CoP}</Card.Title>
                    <Card.Text>
                    Este producto esta la venta, aproveche ahora!
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Marca: {product.brand}</ListGroup.Item>

                    <ListGroup.Item>Fecha de venta: {product.date}</ListGroup.Item>
                    <ListGroup.Item>Descuento: {product.Descuento}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="#">Comprar</Card.Link>
                    <Card.Link href="#">Añadir al carrito</Card.Link>
                </Card.Body>
            </Card>
            </div>
          )
        })}

        <div style={{textAlign: "center"}}>
          {Mix == "" ? (
            (
              <>
              <div style={{width:" 500px", marginLeft: "450px"}} >
                <h2 style={{margin: "auto", fontFamily: "arial"}}>No hay productos a la venta.</h2>
                <img src={out} alt="out" />
              </div>
              </>   
          )
          ) : (
              <p style={{display: "none"}}>A la venta</p>
          )}
        </div>
        
      </div>
      
      </>  
  );
}

export default ComplMix;