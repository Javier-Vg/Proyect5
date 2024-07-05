import Nabvar from '../components/navbar'
//import { Carousel } from 'bootstrap'
import Footer from '../components/footer'
import Carosel from '../components/Carusel';
import fondoDragon from "../assets/img/fondoDragon.jpg";

function Home() {
  return (
    <>
        <Nabvar/>
        <h1 style={{position: "absolute"}}>Componentes </h1>
        <Carosel/>
        <img className='fondoDragon' src={fondoDragon} alt="h" />
      
        <Footer/>
    </>
  )
}

export default Home