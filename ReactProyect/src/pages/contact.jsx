import Nabvar from "../components/navbar"
import FormContact from "../components/FormContact"
import Footer from "../components/footer"

function Contact() {

  return (

    <>
        <Nabvar/>
        <div className="divContactenos">
          <h3>Contactenos:</h3>
             <FormContact/>
        </div>
        <Footer/>
    </>
    
  )
}

export default Contact