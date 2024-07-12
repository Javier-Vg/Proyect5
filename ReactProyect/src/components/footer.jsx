//import InstagramIcon from '@mui/icons-material/Instagram';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink} from "react-router-dom";
import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";
import kedin from "../assets/kedin.svg";
import ratonDragon from "../assets/ratonDragon.jpg";
import { useNavigate } from "react-router-dom";

function Footer() {
    const navigate = useNavigate();

    let fontSize= {
        fontSize: "30px"
    }

    //Navega por rutas cada que de click al boton.
    function about() { 
        navigate("/aboutUs")
    }

    function contact() {
        navigate("/contact")
    }
    
  return (
    <>
    <br />
    <br />
    <br />

    <br />
     <img className='fondoDragon' src={ratonDragon} alt="h" /> 
    <footer className="divFoter">
        <div className="subDivF1">
            <div className= "divsTextFoter"><h1>JavWare</h1></div>
            <br />
            <a onClick={about} ><div className= "divsTextFoter">Quienes somos</div></a>
            
            <div className= "divsTextFoter">Asesor</div>
        
            <NavDropdown style={fontSize} title="Productos" id="basic-nav-dropdown">
                <NavDropdown.Item><NavLink id='navLinks' to="/show1">Componentes Externos</NavLink></NavDropdown.Item>
                <NavDropdown.Item><NavLink id='navLinks' to="/show2">Componentes Internos</NavLink></NavDropdown.Item>
                <NavDropdown.Item><NavLink id='navLinks' to="/show3">Mixto</NavLink></NavDropdown.Item>           
            </NavDropdown>

        </div>

        <div className="subDivF2">
            <div className="redesDiv">
                
                <div className= "divsTextFoter"><a href="https://www.instagram.com/" target='blank'> <img  src={instagram} /></a></div>
                <div className= "divsTextFoter"> <a href="https://www.facebook.com/" target='blank'><img  src={facebook} /> </a></div>
                <div className= "divsTextFoter"><a href="https://www.linkedin.com/" target='blank'><img src={kedin} /></a></div>
            </div>
            <br />
            <a onClick={contact}><div className= "divsTextFoter">Centro de ayuda</div></a>
            
            <div className= "divsTextFoter">Puntos de venta</div>
            <div className= "divsTextFoter">Contacto:<br/>Correo: jvargas@fwdcostarica.com.<br/>Numero: +506 8802-3861.</div>
            
        </div>
        
        <div className="subDiv3">
            <div>JavWare 2024</div>
            <div>Derechos Reservados</div>
        </div>
    </footer>

    </>
    
  )
}

export default Footer