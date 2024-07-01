import React from 'react'
import Nabvar from '../navbar'
import {NavLink} from "react-router-dom";

function AdministPeriferics() {
  return (
      
      <>
      <Nabvar/>
      <div>AdministPeriferics</div>
      <NavLink to="/crud">Volver</NavLink>
      </>
   
  )
}

export default AdministPeriferics