import postUser from '../service/postUser'
import { useEffect, useState } from 'react'
import RegisterBostrap from "../components/RegisterBostrap"
import Footer from '../components/footer'
import Nabvar from '../components/navbar'

function Registros() {
    return (
      <>
      <Nabvar/>
      <RegisterBostrap/>
      <Footer/>
      </>
    )
}

export default Registros