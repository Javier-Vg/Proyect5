import Nabvar from "../../components/navbar"
import ComplMix from "../../components/ShowProductComponent/CompMix"
import Footer from "../../components/footer"
import busqueda from "../../assets/busqueda.svg"

function ShowMix() {
  //Filtra por medio de las clases, ocultandolas segun sus caracteres.
  document.addEventListener("keyup", e =>{
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
      
        <h3 style={{fontFamily: "arial", padding: "10px"}}>Encuentra lo que necesites</h3>
        <img style={{ padding: "10px"}} src={busqueda} />
        <input style={{ padding: "10px"}} id="buscador" type="text" />{/*Filtra por medio de este input, obteniendo el id del boton*/}
      </div>
    <hr />
    <ComplMix/>  
    <Footer/>
    </>
    
  )
}

export default ShowMix