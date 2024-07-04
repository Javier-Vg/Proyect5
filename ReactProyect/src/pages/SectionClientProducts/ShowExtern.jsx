import Nabvar from "../../components/navbar"
import ComplExt from "../../components/ShowProductComponent/CompExt"

function ShowExtern() {

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
    <h3>Encuentra lo que necesites</h3>
    Buscar...
    <input id="buscador" type="text" />
    <hr />
    <ComplExt/>

    <div>ShowExtern</div>
    </>
  )
}

export default ShowExtern