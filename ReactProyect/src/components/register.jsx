import postUser from '../service/postUser'
import { useEffect, useState } from 'react'
import RegisterBostrap from "./RegisterBostrap"
import Start from '../pages/start'

function Registros() {

    return (
      <>
      <Start/>
      <RegisterBostrap/>
      </>
    )
}

export default Registros