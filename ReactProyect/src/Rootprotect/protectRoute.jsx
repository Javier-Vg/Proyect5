import { Navigate,Outlet} from "react-router-dom"

const ProtectedRoute = () => {
    let userAct = localStorage.getItem("userActive")
    console.log(userAct);
  
    if (userAct == false || userAct == null || userAct != "jvargas@fwdcostarica.com") {//Validaciones

        //Redirecciona a la ruta en caso de que no se haya iniciado sesion:
        //lo que hace "replace" es eliminar en auto cada que ponga esa ruta en la url.
        return <Navigate to={"/home"} replace/>

    }else{
        //En caso de que sea valido, sigue su flujo de ruta normalmente, permitiendo navegar por las rutas protegidas
        return <Outlet/>
    }
}

export default ProtectedRoute