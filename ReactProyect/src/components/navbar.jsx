
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink} from "react-router-dom";
import LoginVerificador from '../components/loginVerificador';

    function Nabvar() {


      let sesion = localStorage.getItem("userValid");
      let adminStatus = localStorage.getItem("Admin");

      let handleClick = () =>{
        localStorage.removeItem("userActive")
        localStorage.removeItem("Admin")
        localStorage.removeItem("userValid")
      }

      //Actualiza cada que cierre sesion
      useState(() =>{
          console.log(sesion);
      },[sesion])

        return (
          <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
              <Navbar.Brand href="#home">JavWare</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  
                  <NavLink id='navLinks' to="/home">Home </NavLink>
                  <NavLink id='navLinks' to="/register">Register </NavLink>
                  
                  {!sesion && (
                      <NavLink id='navLinks' to="/login">Login</NavLink>
                  )}

                  
                
                  <NavDropdown title="Secciones" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Productos destacados</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Promociones
                    </NavDropdown.Item>
                    <NavDropdown.Item ><NavLink id='navLinks' to="/contact">Contactenos</NavLink></NavDropdown.Item>
                    <NavDropdown.Item><NavLink id='navLinks' to="/aboutUs">Informacion general</NavLink></NavDropdown.Item>
                    
                    <NavDropdown title="Productos" id="basic-nav-dropdown">
                      <NavDropdown.Item><NavLink id='navLinks' to="/show1">Componentes Externos</NavLink></NavDropdown.Item>
                      <NavDropdown.Item><NavLink id='navLinks' to="/show2">Componentes Internos</NavLink></NavDropdown.Item>
                      <NavDropdown.Item><NavLink id='navLinks' to="/show3">Mixto</NavLink></NavDropdown.Item>
                      
                    </NavDropdown>

                    <NavDropdown.Divider />
                    {sesion && (
                      <NavDropdown.Item href="#action/3.4">
                            <button className='btnCloseSesion' onClick={handleClick}>Cerrar sesion</button>
                      </NavDropdown.Item>
                    )}
                    
                  </NavDropdown>

                    <p id='pNav'><LoginVerificador/></p>
                  {adminStatus &&(
                    <NavLink id='navLinkCrud' to="/crud">Crud</NavLink>
                  )}
                  
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        );
      }
      
export default Nabvar;