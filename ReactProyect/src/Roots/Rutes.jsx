import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Login from '../pages/login'
import Registros from '../components/register'
import Start from '../pages/start'
import ProtectedRoute from '../Rootprotect/protectRoute';
//import UsuarioActivo from '../pages/sesion';
import Crud from "../pages/CRUD";
import Home from "../pages/home";
import AboutUs from "../pages/AboutUs";
import Error from "../pages/error";
import Contact from "../pages/contact";

function Rutas() {
    return (

        <>
          <Router>
            <Routes>
              <Route path='/home' element = {<Home/>}/>
              <Route path='/contact' element = {<Contact/>}/>
              <Route path='/login' element = {<Login/>}/>
              <Route path='/' element = {<Start/>}/>
              <Route path='/aboutUs' element = {<AboutUs/>}/>
              <Route path='/error' element = {<Error/>}/>
              <Route path="/register" element={<Registros/>}/>
    
              {/* Esto hace que la pagina sea privada, mientras el prop tenga el valor "false" */}
              <Route element = {<ProtectedRoute />}>
                <Route path='/crud' element = {<Crud/>}/>
              </Route>
          </Routes>
          </Router>
        </>
        
      )
}

export default Rutas