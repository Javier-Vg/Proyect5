import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import postUser from '../service/postUser'
import { getUser } from '../service/getUser';

function LoginBostrap() {
  
  let RecorrerUsuarios = async () => {
    
    let usuariosTotales = await getUser();
    console.log(usuariosTotales);
    usuariosTotales.forEach(correo => {
      if (correo.correo == correoUsuario ) {
        return false
      }
    });
    return true
  }

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  let [NameUser,setNameUser]= useState()
  let [NombreReal,setNombreReal]= useState()
  let [correoContraRegister,setCorreoContraRegister]= useState()
  let [correoUsuario,setCorreoUsuario]= useState()
  let [Provincia,setProvincia]= useState()

  useEffect(() => {
    console.log(correoUsuario);
  },[correoUsuario])

    function cargarRegister(e) {
      e.preventDefault()
      
      let infoP = {
        correo: correoUsuario,
        contra: correoContraRegister,
        usuario: NombreReal,
        provincia: Provincia,
        username: NameUser,
      }

      for (const clave in infoP) {
        
        let iterador =  infoP[clave].eval()
        console.log(iterador);
        if (iterador == ""){
          alert("Espacios vacios...")
          console.log("Space pool");
          return (false)
        }else{
          console.log("que?");
        }
      }

      //Si retorna true, añade al usuario, si no, no, porque ese correo ya existe.
      if (RecorrerUsuarios) {
        
        postUser(infoP)
      }else{
        alert("Ese correo ya existe")
      }
    }

  return (
    
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Su nombre completo:</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Ingrese su nombre:"
            value={NombreReal}
            onChange={(e)=>{setNombreReal(e.target.value)}}
            
          />
          <Form.Control.Feedback>Se ve bien!</Form.Control.Feedback>
        </Form.Group>
      
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Username</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              required
              value={NameUser}
              onChange={(e)=>{setNameUser(e.target.value)}}

            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>

      <Row className="mb-3">

        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Correo</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Ingrese su correo:" 
            required
            value={correoUsuario}
            onChange={(e)=>{setCorreoUsuario(correoUsuario = e.target.value)}}
             />
          <Form.Control.Feedback type="invalid">
            Porfavor ingrese una ciudad.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Ingrese su contraseña:" 
            required 
            value={correoContraRegister}
            onChange={(e)=>{setCorreoContraRegister(e.target.value)}}
            
            />
          <Form.Control.Feedback type="invalid">
          Porfavor ingrese un estado.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>Provincia</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Agregue su provincia" 
            required 
            value={Provincia}
            onChange={(e)=>{setProvincia(e.target.value)}}
            />
          <Form.Control.Feedback type="invalid">
          Porfavor ingrese un estado.
          </Form.Control.Feedback>
        </Form.Group>

      </Row>

      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Aceptar términos y condiciones."
          feedback="Debes aceptar antes de enviar."
          feedbackType="invalido"
        />
      </Form.Group>
        <Button onClick={cargarRegister} type="submit">Registrar Usuario</Button>
    </Form>
    
  );
}

export default LoginBostrap;
