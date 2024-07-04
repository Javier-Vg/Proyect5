import Nabvar from "../../components/navbar"
import ComplMix from "../../components/ShowProductComponent/CompMix"
import Footer from "../../components/footer"

function ShowMix() {
  
  document.addEventListener("keyup", e =>{
    //e.target.matches("#buscador")
    //console.log(e.target.value); 
    document.querySelectorAll(".filter").forEach(card => {
      card.textContent.toLowerCase().includes(e.target.value.toLowerCase())
      ? card.classList.remove("filtro")
      : card.classList.add("filtro")
    })
  })



  return (
    <>
    <Nabvar/>
    <h3>Encuentra lo que necesites</h3>
    <hr />
    <ComplMix/>  
    <Footer/>
    </>
    
  )
}

export default ShowMix