import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardsAbout() {
  return (

    <>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://media.istockphoto.com/id/641535676/es/foto/ingeniero.webp?b=1&s=170667a&w=0&k=20&c=vDztDr46h5h7bFnHh5Y21xtmt5C4uObeW54EkadyDBs=" />
      <Card.Body>
        <Card.Title>Armamos PCs</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1626218174358-7769486c4b79?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGMlMjBnYW1pbmd8ZW58MHx8MHx8fDA%3D" />
      <Card.Body>
        <Card.Title>Mercado de computadoras</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://masterticrd.com.do/wp-content/uploads/2023/11/OIG-2.jpeg" />
      <Card.Body>
        <Card.Title>Componentes en buen estado</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    </>
    
    
  );
}

export default CardsAbout;