
import Nabvar from "../components/navbar"
import CrudForm from "../components/CrudForm"
import {NavLink} from "react-router-dom";

function Crud() {

  return (
    <>
      <Nabvar/>
      <div>CRUD</div>
      <CrudForm/>

      
      <NavLink to= "/partsStorage">
        <button >Piezas</button>
      </NavLink>

      <NavLink to= "/perifericsStorage">
        <button >Perifericos</button>
      </NavLink>

    </>
    
  )
}

export default Crud