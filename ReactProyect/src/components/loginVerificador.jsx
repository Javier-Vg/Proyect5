import { useEffect, useState } from "react";

function LoginVerificador() {

    const [userActive, setUserActive] = useState();
    
    let usuarioActivo = localStorage.getItem("userActive");

    useEffect(() => {
        usuarioActivo != undefined ? setUserActive(usuarioActivo) : setUserActive("Sin usuario")
        console.log(userActive);
    },[userActive]);
    
    return (
        <>
            {userActive}
        </>
    )
}

export default LoginVerificador