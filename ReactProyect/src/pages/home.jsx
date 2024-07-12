import Nabvar from '../components/navbar'
//import { Carousel } from 'bootstrap'
import Footer from '../components/footer'
import CarouselElementos from '../components/CarouselElementos';
import videohome from "../assets/videohome.mp4";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  function descubrir() {
    navigate("/show1")
  }

  return (

    <>
        <Nabvar/>
        <h1 className='h1Home'>Descubre nuevos productos</h1>
        <button onClick={descubrir} className='btnHome' >Descubrir</button>

        <video className='video' autoPlay loop muted>
          <source src={videohome} type='video/mp4'/>
        </video>
        <br />
        <br />
        <h1 style={{textAlign: "center", fontFamily: "arial"}}>Productos Disponibles</h1>
        <CarouselElementos/>
        <br />

        <div className='divInformacionHome'>
          <h2>¿Cual es nuestro objetivo?</h2>
          <p>Somos empresa que vende productos de computación tiene como objetivos principales ofrecer una amplia gama de productos de hardware, software y accesorios tanto en su local físico 
            como en línea, brindar un excelente servicio al cliente con atención rápida y eficiente, y optimizar sus procesos
             logísticos y de entrega para garantizar la satisfacción y lealtad de sus clientes.</p>
        </div>

        <div className='divInformacionHome'>
     
          <h2>¿Que queremos conseguir?</h2>
          <p>Una empresa que vende productos de computación busca expandir su catálogo de productos, aumentar su presencia en el mercado tanto a nivel local como en línea, 
            implementar tecnologías innovadoras para mejorar la experiencia del cliente, fortalecer las relaciones con proveedores y socios estratégicos, y promover prácticas sostenibles. Además, pretende optimizar sus operaciones logísticas y de distribución
             para asegurar entregas más rápidas y eficientes, y desarrollar programas de fidelización que incentiven la lealtad y la satisfacción del cliente.</p>
          
        </div>

        <div className='divInformacionHome'>
          <h2>¿Que tan seguro son los pagos?</h2>
          <p>En nuestro e-commerce, nos comprometemos a ofrecer una seguridad de pagos de primera categoría. Utilizamos tecnologías avanzadas 
            de encriptación y sistemas de autenticación robustos para proteger la información financiera de nuestros clientes. 
            Implementamos protocolos de seguridad como SSL (Secure Socket Layer) y certificaciones de pago seguro para garantizar transacciones 
            seguras y proteger contra fraudes. Nuestro objetivo es proporcionar una experiencia de compra en línea confiable y segura, donde los clientes puedan realizar sus pagos con total tranquilidad.</p>
        </div>

        <Footer/>
    </>
  )
}

export default Home