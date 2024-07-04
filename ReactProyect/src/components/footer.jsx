//import InstagramIcon from '@mui/icons-material/Instagram';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink} from "react-router-dom";

function Footer() {

    let fontSize= {
        fontSize: "30px" 
    }
    
  return (

    <>
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
                <div className= "divsTextFoter">Face</div>
                <div className= "divsTextFoter">insta</div>
                <div className= "divsTextFoter">Linked</div>
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