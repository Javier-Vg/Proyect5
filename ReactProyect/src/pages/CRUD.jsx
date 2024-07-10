
import Nabvar from "../components/navbar"
import CrudForm from "../components/CrudForm"
import {NavLink} from "react-router-dom";
import cpu from "../assets/cpu.svg";
import auriculares from "../assets/auriculares.svg";

function Crud() {

  return (
    <>
      <Nabvar/>
      <br />
      <CrudForm/>
    </>
    
  )
}

export default Crud