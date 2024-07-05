import Nabvar from "../../components/navbar"
import ComplInt from "../../components/ShowProductComponent/CompInt"
import Footer from "../../components/footer"
import busqueda from "../../assets/busqueda.svg"

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
    <img src={busqueda} style={{padding: "10px"}} />
    <input id="buscador" type="text" />
    <hr />
    <ComplInt/>
    <Footer/>
    </>
  )
}

export default ShowIntern