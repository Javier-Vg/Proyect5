
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, Outlet} from "react-router-dom";
import LoginVerificador from '../components/loginVerificador';

    function Nabvar() {

      const [crudValid, setCrudValid] = useState()

        return (
          <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
              <Navbar.Brand href="#home">ReDragon</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  
                  <NavLink id='navLinks' to="/home">Home </NavLink>
                  <NavLink id='navLinks' to="/register">Register </NavLink>
                  <NavLink id='navLinks' to="/login">Login</NavLink>
                
                  <NavDropdown title="Secciones" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Productos destacados</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Promociones
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Informacion general</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Horarios de atencion
                    </NavDropdown.Item>
                  </NavDropdown>
                  <p id='pNav'><LoginVerificador/></p>
                  
                  <NavLink id='navLinkCrud' to="/crud">Crud</NavLink>
                  
                  
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        );
      }
      
export default Nabvar;