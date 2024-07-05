import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useTheContext } from '../../Context/ContextProducts';

function ComplInt() {
    const {ProductsIntern} = useTheContext();

  
    return (

    
      <>
      <div className='CompIntDiv'>
            
        {ProductsIntern.map((product) => {
          return(
            <div className='filter' key={product}>
                  <Card  style={{ width: '15rem' }}>
            <Card.Img className='imgProducClient' variant="top" src={product.img} />
            <Card.Body>
                <Card.Title>{product.CoP}</Card.Title>
                <Card.Text>
                  <strong>${product.price}</strong>
                
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>Marca: {product.brand}</ListGroup.Item>
                <ListGroup.Item>Promocion: {product.promo}</ListGroup.Item>
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


        {ProductsIntern == "" ? (
            <h2>No hay productos a la venta</h2>
        ) : (
            <p style={{display: "none"}}>A la venta</p>
        )}
        
      </div>
      
      </>  
  );
}

export default ComplInt;