import Carousel from 'react-bootstrap/Carousel';
import fondoDragon from "../assets/img/fondoDragon.jpg";
function Carusel() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img style={{height: "700px"}}
    
          className="d-block w-100"
          src="https://static.vecteezy.com/system/resources/previews/025/121/239/large_2x/futuristic-office-design-with-modern-computer-equipment-generated-by-ai-free-photo.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        <h2 style={{color: "white", fontFamily: "sans-serif"}}>Mas de 5 años en el mercado...</h2>
        <p style={{color: "white"}}>Actualmente conocidos a nivel regional y en poco tiempo a nivel mundial..</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{height: "700px"}}
          className="d-block w-100"
          src={fondoDragon}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h2 style={{color: "white", fontFamily: "sans-serif"}}>Mas de 5 años en el mercado...</h2>
          <p style={{color: "white"}}>Actualmente conocidos a nivel regional y en poco tiempo a nivel mundial..</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{height: "700px"}}
          className="d-block w-100"
          src="https://img.freepik.com/fotos-premium/portatil-futurista_662093-1377.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
        <h2 style={{color: "white", fontFamily: "sans-serif"}}>Mas de 5 años en el mercado...</h2>
        <p style={{color: "white"}}>Actualmente conocidos a nivel regional y en poco tiempo a nivel mundial..</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carusel;