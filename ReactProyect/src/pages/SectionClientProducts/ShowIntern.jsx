import Nabvar from "../../components/navbar"
import ComplInt from "../../components/ShowProductComponent/CompInt"

function ShowIntern() {

  //Filtra por la clase de los elementos
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
    Buscar...
    <input id="buscador" type="text" />
    <hr />
    <ComplInt/>

    <div>ShowInternn</div>
    </>
  )
}

export default ShowIntern