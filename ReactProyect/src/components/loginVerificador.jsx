import { useEffect, useState } from "react";

function LoginVerificador() {

    const [userActive, setUserActive] = useState()
    
    let usuarioActivo = localStorage.getItem("userActive");
    useEffect(() => {
        usuarioActivo != undefined ? setUserActive(usuarioActivo) : setUserActive("Sin usuario")
    },[userActive])
    
    return (
        <div>{userActive}</div>
    )
}

export default LoginVerificador