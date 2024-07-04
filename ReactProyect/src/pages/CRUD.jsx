
import Nabvar from "../components/navbar"
import CrudForm from "../components/CrudForm"
import {NavLink} from "react-router-dom";


function Crud() {

  return (
    <>

      <Nabvar/>
      <div>CRUD</div>
      <CrudForm/>

      
      <NavLink to= "/InternStorage">
        <button >Componentes Internos</button>
      </NavLink>

      <NavLink to= "/ExternStorage">
        <button >Componentes Externos</button>
      </NavLink>

    </>
    
  )
}

export default Crud