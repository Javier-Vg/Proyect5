import Nabvar from "../navbar"
import {NavLink} from "react-router-dom";

function ProductsManejo() {
  return (
    <>
    <Nabvar/>
    <div>AdministParts</div>

    <NavLink to="/crud">Volver</NavLink>

    </>
    
  )
}

export default ProductsManejo