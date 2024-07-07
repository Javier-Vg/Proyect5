import Nabvar from '../components/navbar'
//import { Carousel } from 'bootstrap'
import Footer from '../components/footer'
import fondoDragon from "../assets/img/fondoDragon.jpg";

function Home() {
  return (
    <>
        <Nabvar/>
        <h1 className='kkkk' style={{position: "absolute", marginLeft: "600px"}}>Componentes </h1>
        <img className='fondoDragon' src={fondoDragon} alt="h" />
        <Footer/>
    </>
  )
}

export default Home