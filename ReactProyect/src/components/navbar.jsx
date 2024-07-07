
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink} from "react-router-dom";
import LoginVerificador from '../components/loginVerificador';
import usuario from "../assets/usuario.svg";
import ajustes from "../assets/ajustes.svg";
import Swal from "sweetalert2";


    function Nabvar() {

      let [modal, setModal] = useState(false)

      let sesion = localStorage.getItem("userValid");
      let adminStatus = localStorage.getItem("Admin");
      
      let handleClick = () =>{
        localStorage.removeItem("userActive")
        localStorage.removeItem("Admin")
        localStorage.removeItem("userValid")
      }

      let InfoPersonal = () =>{
        if (sesion) {
          setModal(!modal)
        }else{
          Swal.fire({
            icon: "warning",
            text: "Registrese para ver su informacion"
          })
        }
       
      }

      //Actualiza cada que cierre sesion
     
        return (
          
          <>
          <Navbar expand="lg" className="bg-body-tertiary">
            <Container className='containerNav'>
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
                    <NavDropdown.Item href="#action/3.2">No se</NavDropdown.Item>
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
                </Nav>

                <Nav>
                  {/*Muestra el usuario en el nabvar*/}
                  <p id='pNav'><LoginVerificador/></p>

                  <div style={{marginTop: "2px", padding: "5px"}}>
                    <button onClick={InfoPersonal} style={{border:"none", backgroundColor:"white"}}><img src={usuario} alt="user" /></button>
                    
                  </div>
                  
                        
                  {/*Muestra el boton de crud*/}
                  {adminStatus &&(
                      <NavLink id='navLinkCrud' to="/crud"><img style={{width: "35px", height: "35px"}} src={ajustes} alt="crud" /></NavLink>
                  )}
                </Nav>

              </Navbar.Collapse>
            </Container>
          </Navbar>

          {modal &&(
            
            <dialog className='modalInfoP' open>
              <h1>Informacion Personal</h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam cumque libero unde, perferendis nostrum necessitatibus repudiandae eius deleniti beatae enim tempore, sunt sint similique! Fuga itaque perferendis explicabo dolorem ipsa?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur exercitationem, neque unde explicabo ducimus rem laborum provident ullam nihil reiciendis quis, aut eos a repellendus deleniti. Sapiente adipisci velit inventore.

            </dialog>   
          
          )}

          </>
          
          
        )
      }
      
export default Nabvar