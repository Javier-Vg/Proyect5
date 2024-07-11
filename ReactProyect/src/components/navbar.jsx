import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState, useRef } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import LoginVerificador from "../components/loginVerificador";
import usuario from "../assets/usuario.svg";
import ajustes from "../assets/ajustes.svg";
import Swal from "sweetalert2";
import { useTheContext } from "../Context/ContextProducts";
import { useNavigate } from "react-router-dom";

function Nabvar() {
  const navigate = useNavigate();

  let [info, setInfo] = useState([]);
  let CarritoRegistro = useRef([]);

  const { Users } = useTheContext();

  let [reload, setReload] = useState([]);

  useEffect(() => {
    setReload(reload)
  }, [reload]);

  function encargo() {
    navigate("/show3");
  }

  let [Comprobacion, setComprobacion] = useState(false);

  useEffect(() => {
    setComprobacion(false);
  }, []);

  

  let [modal, setModal] = useState(false);

  let sesion = localStorage.getItem("userValid");
  let adminStatus = localStorage.getItem("Admin");

  let handleClick = () => {
    localStorage.removeItem("userActive");
    localStorage.removeItem("Admin");
    localStorage.removeItem("userValid");
    setReload(reload);
  };

  let InfoPersonal = () => {
    setComprobacion(true);
    if (sesion) {
      setModal(!modal);
      if (Comprobacion == false) {
        //Itera para encontrar el usuario por medio del id
        for (const i in Users) {
          if (Users[i].id == sesion) {
            setInfo([Users[i]]);
            let registro = Users[i].carrito;
            for (const key in registro) {
              CarritoRegistro.current.push(registro[key]);
              setReload(CarritoRegistro.current);
            }
          }
        }
      } else {
        console.log("NO");
      }
    } else {
      Swal.fire({
        icon: "warning",
        text: "Registrese para ver su informacion",
      });
    }
  };
  //Actualiza cada que cierre sesion

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container className="containerNav">
          <Navbar.Brand>
            <NavLink id="navLinks" to="/home">
              JavWare
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink id="navLinks" to="/home">
                Home{" "}
              </NavLink>
              <NavLink id="navLinks" to="/register">
                Register{" "}
              </NavLink>

              {!sesion && (
                <NavLink id="navLinks" to="/login">
                  Login
                </NavLink>
              )}

              <NavDropdown title="Secciones" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <NavLink id="navLinks" to="/contact">
                    Contactenos
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink id="navLinks" to="/aboutUs">
                    Informacion general
                  </NavLink>
                </NavDropdown.Item>

                <NavDropdown title="Productos" id="basic-nav-dropdown">
                  <NavDropdown.Item>
                    <NavLink id="navLinks" to="/show1">
                      Componentes Externos
                    </NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <NavLink id="navLinks" to="/show2">
                      Componentes Internos
                    </NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <NavLink id="navLinks" to="/show3">
                      Mixto
                    </NavLink>
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown.Divider />

                {sesion && (
                  <NavDropdown.Item href="#action/3.4">
                    <button className="btnCloseSesion" onClick={handleClick}>
                      Cerrar sesion
                    </button>
                  </NavDropdown.Item>
                )}
              </NavDropdown>
            </Nav>
            <Nav>
              {/*Muestra el usuario en el nabvar*/}
              {sesion && (
                <p id="pNav">
                  <LoginVerificador />
                </p>
              )}

              <div style={{ marginTop: "2px", padding: "5px" }}>
                <button
                  onClick={InfoPersonal}
                  style={{ border: "none", backgroundColor: "white" }}
                >
                  <img src={usuario} alt="user" />
                </button>
              </div>

              {/*Muestra el boton de crud*/}
              {adminStatus && (
                <NavLink id="navLinkCrud" to="/crud">
                  <img
                    style={{ width: "35px", height: "35px" }}
                    src={ajustes}
                    alt="crud"
                  />
                </NavLink>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {modal && (
        <dialog className="modalInfoP" open>
          <div className="cajasDivInfo">
            <h3 style={{ fontFamily: "cursive", fontSize: "25px" }}>
              Informacion Personal:
            </h3>
            <br />
            <strong>Nombre:</strong>
            <p>{info[0].usuario}</p>
            <strong>Username:</strong>
            <p>{info[0].username}</p>
            <strong>Provincia:</strong>
            <p>{info[0].provincia}</p>
            {/* <strong>Nombre de Usuario</strong>
                <p>{info[0].id}</p> */}
            <strong>Correo:</strong>
            <p>{info[0].correo}</p>
            <strong>Contraseña:</strong>
            <p>{info[0].contra}</p>

            {adminStatus && (
              <p style={{ color: "blue" }}>-Administrador Activo-</p>
            )}
          </div>

          <div className="cajasDivInfo">
            <p style={{ fontSize: "20px" }}>Compras Realizadas:</p>
            <p>Total de compras: {info[0].CantidadCompras}</p>
            <p>Gastos Totales: {info[0].comprasRecuento}$</p>
          </div>

          <div className="cajasDivInfo">
            <p style={{ fontSize: "20px", fontFamily: "arial" }}>
              Carrito de Compras:
            </p>
            <hr />

            <div className="containerModalInfoP">
              <p>Producto</p>
              <p>Precio</p>
              <p>Cantidad</p>
              <p>Descuento</p>
            </div>
            <hr style={{ margin: "0" }} />

            <div>
              {reload.map((productos, i) => {
                return (
                  <div className="divRegistroCarrito" key={i}>
                    <p>{productos.CoP}</p>
                    <p>${productos.price}</p>
                    <p>{productos.stockTotal}</p>
                    <p>{productos.Descuento}%</p>
                  </div>
                );
              })}
            </div>

            <hr />

            <div>
              <button
                onClick={encargo}
                style={{
                  marginLeft: "310px",
                  color: "white",
                  backgroundColor: "#48e",
                }}
              >
                Encargar
              </button>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
}

export default Nabvar;
