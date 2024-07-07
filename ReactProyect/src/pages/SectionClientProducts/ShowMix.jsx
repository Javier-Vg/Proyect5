import Nabvar from "../../components/navbar"
import ComplMix from "../../components/ShowProductComponent/CompMix"
import Footer from "../../components/footer"
import busqueda from "../../assets/busqueda.svg"

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
    <div> 
        <h3 style={{fontFamily: "arial"}}>Encuentra lo que necesites</h3>
        <img src={busqueda} />
        <input id="buscador" type="text" />
      </div>
    <hr />
    <ComplMix/>  
    <Footer/>
    </>
    
  )
}

export default ShowMix