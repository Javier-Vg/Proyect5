import {Link, Outlet} from "react-router-dom";

function start() {
    return (
        <div>
          <Link to="/register"> <button> Registro</button> </Link>
          <Link to="/login"> <button> Login</button> </Link>
          <hr/>
          <Outlet/>
        </div>
      )
}

export default start