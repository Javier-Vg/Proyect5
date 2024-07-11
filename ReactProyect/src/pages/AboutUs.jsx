
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
    <div className="aboutDiv">
      <CardsAbout/>
    </div>
    <br />
    <Mapa/>
    <Footer/>
    </>
  )
}

export default AboutUs