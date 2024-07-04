
import Nabvar from "../components/navbar"
import CardsAbout from "../components/CardsAbout"
import Footer from "../components/footer"

function AboutUs() {
  return (
    <>
    <Nabvar/>
    <div className="aboutDiv">
      <CardsAbout/>
    </div>
    <Footer/>
    </>
  )
}

export default AboutUs