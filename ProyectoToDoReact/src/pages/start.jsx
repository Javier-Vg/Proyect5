import {Link, Outlet} from "react-router-dom";

function Start() {
    return (
        <div>
          <Link to="/register"> <button> Registro</button> </Link>
          <Link to="/login"> <button> Login</button> </Link>
          <hr/>
          <Outlet/>
        </div>
      )
}

export default Start