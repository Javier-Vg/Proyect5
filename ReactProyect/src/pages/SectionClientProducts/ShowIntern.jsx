import Nabvar from "../../components/navbar"
import ComplInt from "../../components/ShowProductComponent/CompInt"
import Footer from "../../components/footer"
import busqueda from "../../assets/busqueda.svg"
import { useState } from "react";

function ShowIntern() {

  let [estadoBusqueda, setEstadoBusqueda] = useState("");

   //Filtra por medio de las clases, ocultandolas segun sus caracteres o mostrandolas. AHHHHHHHHHHHHHHHHHHHHHHh
    document.querySelectorAll(".filter").forEach(card => {
      card.textContent.toLowerCase().includes(estadoBusqueda.toLowerCase())
      ? card.classList.remove("filtro")
      : card.classList.add("filtro")
    })

  return (
    <>
    <Nabvar/>
    <h3 style={{padding:"15px"}}>Encuentra lo que necesites</h3>
    <img src={busqueda} style={{padding: "10px"}} />
    <input onChange={(e) => setEstadoBusqueda(e.target.value)} id="buscador" type="text" />
    <hr />
    <ComplInt/>
    <Footer/>
    </>
  )
}

export default ShowIntern