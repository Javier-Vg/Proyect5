import Nabvar from "../../components/navbar"
import ComplExt from "../../components/ShowProductComponent/CompExt"
import Footer from "../../components/footer"
import busqueda from "../../assets/busqueda.svg"
import { useEffect, useState } from "react";
function ShowExtern() {

  let [category, setCategory] = useState()

  //Filtra por busqueda.
  document.addEventListener("keyup", e =>{
    document.querySelectorAll(".filter").forEach(card => {
      card.textContent.toLowerCase().includes(e.target.value.toLowerCase())
      ? card.classList.remove("filtro")
      : card.classList.add("filtro")
    })
  })

  //Filtra por categoria.
  document.querySelectorAll("#categoria").forEach(card => {
      card.textContent.toLowerCase().includes(category.toLowerCase())
      ? card.classList.remove("filtro")
      : card.classList.add("filtro")
    })

  return (
    <>
    <Nabvar/>
    <div className="buscadorDiv">
      <div> 
        <h3 style={{fontFamily: "arial"}}>Encuentra lo que necesites</h3>
        <img src={busqueda} />
        <input id="buscador" type="text" />
      </div>
        
      <div>
        <p>Categorias:</p>
          
        <select onChange={(e) => setCategory(e.target.value)} className="selectExtern">
          <option value="s">Sin categoria</option>
          <option value="Teclado">Teclado</option>
          <option value="Raton">Raton</option>
          <option value="Monitores">Monitor</option>
          <option value="Microfono">Microfono</option>
          <option value="Camara">Camara</option>
          <option value="Monitores">Monitores</option>
          <option value="Gabinete">Gabinete</option>
          <option value="Fuentes de alimentacion">Fuentes de alimentacion </option>
          <option value="Audio">Audio</option>
          <option value="Mandos">Mandos</option>
          <option value="Sillas">Sillas</option>
        </select>
      </div>
    </div>

    <ComplExt/>
    <Footer/>
    </>
  )
}

export default ShowExtern