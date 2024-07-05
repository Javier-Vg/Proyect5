import Nabvar from "../../components/navbar"
import ComplExt from "../../components/ShowProductComponent/CompExt"
import Footer from "../../components/footer"
import busqueda from "../../assets/busqueda.svg"

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

    <div className="buscadorDiv">
      <div> 
        <h3 style={{fontFamily: "arial"}}>Encuentra lo que necesites</h3>
        <img src={busqueda} />
        <input id="buscador" type="text" />
      </div>
        
      <div>
        <p>Categorias:</p>
        <select className="selectExtern">
          <option className="optionExtern">Seleccionar</option>
          <option className="optionExtern">Teclado</option>
          <option className="optionExtern">Raton</option>
          <option className="optionExtern">Microfono</option>
          <option className="optionExtern">Camara</option>
          <option className="optionExtern">Gabinete</option>
          <option className="optionExtern">Fuentes de alimentacion </option>
          <option className="optionExtern">Audio</option>
          <option className="optionExtern">Mandos</option>
          <option className="optionExtern">Sillas</option>
        </select>
      </div>
    </div>

    <ComplExt/>
    <Footer/>
    </>
  )
}

export default ShowExtern