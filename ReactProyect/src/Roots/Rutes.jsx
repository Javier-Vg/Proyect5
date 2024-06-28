import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Login from '../pages/login'
import Registros from '../components/register'
import Start from '../pages/start'
import ProtectedRoute from '../Rootprotect/protectRoute';
import UsuarioActivo from '../pages/sesion';
import CRUD from "../pages/CRUD";
import Home from "../pages/home";

function Rutas() {
    return (
      
        <>
          <Router>
            <Routes>
              <Route path='/home' element = {<Home/>}/>
              <Route path='/login' element = {<Login/>}/>
              <Route path='/' element = {<Start/>}/>
              <Route path='/error' element = {<ProtectedRoute/>}/>
              <Route path="/register" element={<Registros/>}/>
              <Route path="/crud" element={<CRUD/>}/>
    
              {/* Esto hace que la pagina sea privada, mientras el prop tenga el valor "false" */}
              <Route element = {<ProtectedRoute />}>
                <Route path='/usuario' element = {<UsuarioActivo/>}/>
              </Route>
          
          </Routes>
          </Router>
        </>
        
      )
}

export default Rutas