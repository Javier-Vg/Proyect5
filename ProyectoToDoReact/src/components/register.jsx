import postUser from './peticionesFetch/postUser'
import { useState } from 'react'

function Registros() {
    let [correoRegister,setCorreoRegister]= useState()
    let [correoContraRegister,setCorreoContraRegister]= useState()
    let [correoUsuario,setCorreoUsuario]= useState()

    function cargarRegister() {
      let infoP = {
        correo: correoRegister,
        contra: correoContraRegister,
        usuario: correoUsuario
      }
      postUser(infoP);
    }
    return (
      <div className='divR'>
  
        <h2>Nombre de usuario:</h2>
        <input id="nomUsuario" type="text" value={correoUsuario} onChange={(e)=>{setCorreoUsuario(correoUsuario = e.target.value)}} />
        <br/>
        <br/>
        <h2>Ingrese su nuevo correo:</h2>
        <input id="correoRegister" type="text" value={correoRegister} onChange={(e)=>{setCorreoRegister(correoRegister = e.target.value)}} />
        <br/>
        <br/>
        <h2>Ingrese la contraseña para su nuevo correo:</h2>
        <input id="contraRegister" type="text" value={correoContraRegister} onChange={(e)=>{setCorreoContraRegister( correoContraRegister = e.target.value)}} />
        <br/>
        <br/>
        <button onClick={cargarRegister} id="btnRegisterEnvio">Registrarse</button>
        <br />
      </div>
    )
}

export default Registros