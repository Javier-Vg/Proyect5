import React from 'react'
import Nabvar from '../../components/navbar';
import {NavLink} from "react-router-dom";
import ElementosExtern from "../../components/elementosExtern";
//import Elementos from '../elementos';

function AdministPeriferics() {
  return (
      <>
        <Nabvar/>
        <ElementosExtern/>
        <NavLink to="/crud">Volver</NavLink>
      </>
  )
}

export default AdministPeriferics