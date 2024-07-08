//import InstagramIcon from '@mui/icons-material/Instagram';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink} from "react-router-dom";
import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";
import kedin from "../assets/kedin.svg";
import ratonDragon from "../assets/ratonDragon.jpg";

function Footer() {

    let fontSize= {
        fontSize: "30px"
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
            <div className= "divsTextFoter">Quienes somos</div>
            <div className= "divsTextFoter">Asesor</div>
        
            <NavDropdown style={fontSize} title="Productos" id="basic-nav-dropdown">
                <NavDropdown.Item><NavLink id='navLinks' to="/show1">Componentes Externos</NavLink></NavDropdown.Item>
                <NavDropdown.Item><NavLink id='navLinks' to="/show2">Componentes Internos</NavLink></NavDropdown.Item>
                <NavDropdown.Item><NavLink id='navLinks' to="/show3">Mixto</NavLink></NavDropdown.Item>           
            </NavDropdown>

        </div>

        <div className="subDivF2">
            <div className="redesDiv">
                
                <div className= "divsTextFoter"><img  src={instagram} /></div>
                <div className= "divsTextFoter"><img  src={facebook} /></div>
                <div className= "divsTextFoter"><img src={kedin} /></div>
            </div>
            <br />
            <div className= "divsTextFoter">Comunidad</div>
            <div className= "divsTextFoter">Centro de ayuda</div>
            <div className= "divsTextFoter">Puntos de venta</div>
            <div className= "divsTextFoter">Contacto</div>
        </div>
        
        <div className="subDiv3">
            <div>JavWare 2024</div>
            <div><a>Terminos y condiciones</a></div>
        </div>
    </footer>

    </>
    
  )
}

export default Footer