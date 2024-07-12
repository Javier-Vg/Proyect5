
import Nabvar from "../components/navbar"
import CardsAbout from "../components/CardsAbout"
import Footer from "../components/footer"
import Carusel from "../components/Carusel"
import Mapa from "../components/Mapa"

function AboutUs() {
  return (
    <>
    <Nabvar/>
    <Carusel/>
    <br />
    <br />
    <div className="aboutDiv">
      <CardsAbout/>
    </div>
    <br />
    <br />
    <br />
    <br />
    <p style={{textAlign:"center", fontFamily: "sans-serif", fontSize:"20px"}}>¿Donde estamos ubicados?</p>
     <Mapa/> 
    <Footer/>
    </>
  )
}

export default AboutUs