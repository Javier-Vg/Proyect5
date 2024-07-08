import Nabvar from '../components/navbar'
//import { Carousel } from 'bootstrap'
import Footer from '../components/footer'
import fondoDragon from "../assets/img/fondoDragon.jpg";
import CarouselElementos from '../components/CarouselElementos';
import videohome from "../assets/videohome.mp4";

function Home() {

  return (
    <>
        <Nabvar/>
        
        <h1 className='kkkk' style={{position: "absolute", marginLeft: "600px", zIndex: "1"}}>Componentes </h1>

        <video className='video' autoPlay loop muted>
          <source src={videohome} type='video/mp4'/>
        </video>

        {/* <img className='fondoDragon' src={fondoDragon} alt="h" /> */}
        <br />
        <br />
        <h1 style={{textAlign: "center", fontFamily: "impact"}}>Productos</h1>
        <CarouselElementos/>
        <Footer/>
    </>
  )
}

export default Home