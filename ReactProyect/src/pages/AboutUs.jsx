
import Nabvar from "../components/navbar"
import CardsAbout from "../components/CardsAbout"
import Footer from "../components/footer"
import Carusel from "../components/Carusel"

function AboutUs() {
  return (
    <>
    <Nabvar/>
    <Carusel/>
    <div className="aboutDiv">
      <CardsAbout/>
    </div>
    <Footer/>
    </>
  )
}

export default AboutUs