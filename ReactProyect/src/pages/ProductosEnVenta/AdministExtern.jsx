import React from 'react'
import Nabvar from '../../components/navbar';
import {NavLink} from "react-router-dom";
import ElementosExtern from "../../components/elementosExtern";
import Footer from '../../components/footer';
//import Elementos from '../elementos';

function AdministPeriferics() {
  return (
      <>
        <Nabvar/>
        <ElementosExtern/>

        <NavLink to="/crud">Volver</NavLink>
        <Footer/>
      </>
  )
}

export default AdministPeriferics