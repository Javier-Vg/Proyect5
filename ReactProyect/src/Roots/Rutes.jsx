import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Login from '../pages/login'
import Registros from '../pages/register'
import ProtectedRoute from '../Rootprotect/protectRoute';
import Crud from "../pages/CRUD";
import Home from "../pages/home";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/contact";
import AdministPeriferics from "../pages/ProductosEnVenta/AdministExtern";
import AdministParts from "../pages/ProductosEnVenta/AdministIntern";
import ShowExtern from "../pages/SectionClientProducts/ShowExtern";
import ShowIntern from "../pages/SectionClientProducts/ShowIntern";
import ShowMix from "../pages/SectionClientProducts/ShowMix";

function Rutas() {
    return (
        <>
          <Router>
            <Routes>

              <Route path='/' element = {<Home/>}/>
              <Route path='/home' element = {<Home/>}/>
              <Route path='/contact' element = {<Contact/>}/>
              <Route path='/login' element = {<Login/>}/>
              <Route path='/aboutUs' element = {<AboutUs/>}/>
  
              <Route path="/register" element={<Registros/>}/>

              <Route path="/show1" element={<ShowExtern/>}/>
              <Route path="/show2" element={<ShowIntern/>}/>
              <Route path="/show3" element={<ShowMix/>}/>
    
              {/* Esto hace que la pagina sea privada, mientras el prop tenga el valor "false" */}
              <Route element = {<ProtectedRoute />}>
                <Route path='/crud' element = {<Crud/>}/>
                <Route path='/InternStorage' element = {<AdministParts/>}/>
                <Route path='/ExternStorage' element = {<AdministPeriferics/>}/>
              </Route>

            </Routes>
          </Router>
        </>
        
      )
}

export default Rutas