import Nabvar from "../components/navbar"
import FormContact from "../components/FormContact"

function Contact() {

  return (

    <>
        <Nabvar/>
        <div className="divContactenos">
          <h3>Contactenos:</h3>
             <FormContact/>
        </div>
       
    </>
    
  )
}

export default Contact