import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../service/getUser'

function LoginBostrap() {
    const navigate = useNavigate()
    let [testeoLogin, setLog] = useState(1)
    let [correoLogin,setCorreoLogin]= useState()
    let [correoLoginContra,setCorreoLoginContra]= useState()

    async function cargarLogin() {
        let usuarios = await getUser()
        console.log(usuarios);
        usuarios.forEach(email => {
            if (email.correo == correoLogin && email.contra == correoLoginContra) {
                alert("Cargando...");
                localStorage.setItem("userActive",correoLogin );
                localStorage.setItem("userValid",true );
                if (correoLogin == "jvargas@fwdcostarica.com"){
                  alert("Sus el admin")
                }
        
                setLog(testeoLogin = 0);
            }
        })

        if (testeoLogin != 0) {
            alert("Alguno de los dos datos fueron invalidados")
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
    <Form noValidate validated={validated} onSubmit={handleSubmit}>

      <Row className="mb-3">

        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Correo</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Ingrese su correo:" 
            required
            value={correoLogin}
            onChange={(e)=>{setCorreoLogin(e.target.value)}}

          />
          <Form.Control.Feedback type="invalid">
            Porfavor ingrese su correo.
          </Form.Control.Feedback>
        </Form.Group>
      

        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Ingrese su contraseña" 
            required 
            value={correoLoginContra}
            onChange={(e)=>{setCorreoLoginContra(e.target.value)}}
            
            />
          <Form.Control.Feedback type="invalid">
          Porfavor ingrese su contraeña.
          </Form.Control.Feedback>
        </Form.Group>

      </Row>

        <Button onClick={cargarLogin} type="submit">Registrar Usuario</Button>
      </Form>
  )
}

export default LoginBostrap
