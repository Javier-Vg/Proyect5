
import { getUser } from './peticionesFetch/getUser';
import { useState,useEffect } from 'react'
import { useNavigate } from "react-router-dom";

function Login() {

    const navigate = useNavigate();
    let [testeoLogin, setLog] = useState(1)
    let [correoLogin,setCorreoLogin]= useState()
    let [correoLoginContra,setCorreoLoginContra]= useState()

    //value={correoLogin} no esta funcionando, igual con los demas.

    return(
        <div className='divL'>
            {/* <userContext.Provider value={userConfirm}>
                {children}
            </userContext.Provider> */}
            
            <h2>Ingrese su correo:</h2>
            <input id="correoLogin" type="text" value={correoLogin} onChange={(e)=>{setCorreoLogin(correoLogin = e.target.value)}} />
            <br/>
            <br/>
            <h2>Ingrese la contraseña de su correo:</h2>
            <input id="contraLogin" type="text" value={correoLoginContra} onChange={(e)=>{setCorreoLoginContra(correoLoginContra = e.target.value)}}/>
            <br/>
            <br/>
            <br />
            <button id="btnLoginEnvio" onClick={cargarLogin} >Login</button>
            <br/>
        </div>
    )

    async function cargarLogin() {
        let usuarios = await getUser()
        console.log(usuarios);
        usuarios.forEach(email => {
            if (email.correo == correoLogin && email.contra == correoLoginContra) {
                alert("Cargando....");
                localStorage.setItem("userActive",correoLogin );
                localStorage.setItem("userValid",true );
            
                setLog(testeoLogin = 0);

                setTimeout(() => {
                    navigate("/usuario")
                }, 1300);

            }
        })

        if (testeoLogin != 0) {
            alert("Alguno de los dos datos fueron invalidados")
        }
    }
}


export default Login