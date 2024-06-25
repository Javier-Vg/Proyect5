import './App.css'
import Inicio from './components/toDoList'
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Login from './components/login'
import Registros from './components/register'
import Page from './pages/start'
import ProtectedRoute from './components/blockRuta/protectRoute';
import UsuarioActivo from './pages/sesion';

function App() {
  return (
    <div>
      <h1>Rutas:</h1>
      <Routes>
        <Route path='/' element = {<Page/>}>
          <Route path='/login' element = {<Login/>}/>
          <Route path='/error' element = {<ProtectedRoute/>}/>
          <Route path="/register" element={<Registros/>}/>

          {/* Esto hace que la pagina sea privada, mientras el prop tenga el valor "false" */}
          <Route element = {<ProtectedRoute />}>
            <Route path='/usuario' element = {<UsuarioActivo/>}/>
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
