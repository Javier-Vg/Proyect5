import { useEffect, useState } from "react";

function LoginVerificador() {

    const [userActive, setUserActive] = useState();
    
    let usuarioActivo = localStorage.getItem("username");

    //Muestra al usuario en el Nabvar haciendo un par de validaciones.
    
    useEffect(() => {
        usuarioActivo != undefined ? setUserActive(usuarioActivo) : setUserActive("Sin usuario")
    },[userActive]);

    return (
        <>
            {userActive}
        </>
    )
}

export default LoginVerificador