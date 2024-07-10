import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../service/getUser'
import Swal from 'sweetalert2';
import { Navigate } from 'react-router-dom';

function LoginBostrap() {
 
    let [testeoLogin, setLog] = useState(1)
    let [correoLogin,setCorreoLogin]= useState()
    let [correoLoginContra,setCorreoLoginContra]= useState()

    async function cargarLogin() {
        let usuarios = await getUser()
        console.log(usuarios);
        usuarios.forEach(email => {
          
            if (email.correo == correoLogin && email.contra == correoLoginContra) {
                alert("Inicio de sesion exitoso")
                localStorage.setItem("userActive",email );
                localStorage.setItem("userValid",email.id );
                if (correoLogin == "jvargas@fwdcostarica.com"){
                  localStorage.setItem("Admin",true ); 
                }
                <Navigate to={"/home"} replace />
                
                setLog(testeoLogin = 0);
            }
        })

        if (testeoLogin != 0) {
          Swal.fire({
            icon: "error",
            text: "Correo o contraseña no coinciden"
          })
        }
    }


    const [validated, setValidated] = useState(false)

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
  };

  return (
    <Form className='formLogin' noValidate validated={validated} onSubmit={handleSubmit}>

      <Row className="mb-3">

        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Correo</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Ingrese su correo:" 
            required
            onChange={(e)=>{setCorreoLogin(e.target.value)}}

          />
        </Form.Group>

        <Form.Group as={Col} md="6" controlId="validationCustom04">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Ingrese su contraseña:" 
            required
            onChange={(e)=>{setCorreoLoginContra(e.target.value)}}

          />
        </Form.Group>
        <a href="#">¿Olvidaste tu contraseña?</a>
      

      </Row>
        <Button onClick={cargarLogin} type="submit">Registrarse</Button>
      </Form>
  )
}

export default LoginBostrap
