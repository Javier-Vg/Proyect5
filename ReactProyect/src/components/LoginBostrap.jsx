import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../service/getUser'
import Swal from 'sweetalert2';
import { Navigate } from 'react-router-dom';
import PutPatch from '../service/putPatch';
import { useTheContext } from "../Context/ContextProducts";

function LoginBostrap() {
  const {Users} = useTheContext();

  const navigate = useNavigate();

  let confirm = useRef(false);

  let [modal, setModal] = useState(false)
  let [ContraNew, setContraNew] = useState()
  let [CorrreoOlvido, setCorrreoOlvido] = useState()
 
    let [testeoLogin, setLog] = useState(1)
    let [correoLogin,setCorreoLogin]= useState()
    let [correoLoginContra,setCorreoLoginContra]= useState()

    function Olvido() {
      setModal(!modal)
    }

    function change() {

      const NewPassword = {
        contra: ContraNew
      }

      for (const key in Users) {
        if (Users[key].correo == CorrreoOlvido) {
          confirm.current = true;

          PutPatch(Users[key].id, NewPassword, "users")
          break;
        }
      }

      if (confirm.current == true) {
        Swal.fire({
          icon: "success",
          text: "Se cambio la contraseña correctamente!"
        })
      }else{
        Swal.fire({
          icon: "error",
          text: "No se encontro ese correo."
        })
      }
    }


    async function cargarLogin() {
        let usuarios = await getUser()
        console.log(usuarios);
        usuarios.forEach(email => {
          
            if (email.correo == correoLogin && email.contra == correoLoginContra) {
                alert("Inicio de sesion exitoso")
                localStorage.setItem("userActive",email.correo );
                localStorage.setItem("username",email.username );
                localStorage.setItem("userValid",email.id );
                if (correoLogin == "jvargas@fwdcostarica.com"){
                  localStorage.setItem("Admin",true ); 
                }
                setLog(testeoLogin = 0);
                
            }
        })

        if (testeoLogin != 0) {
          Swal.fire({
            icon: "error",
            text: "No se encontro ese correo!"
          })
        }
        navigate("/register")
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
        <a onClick={Olvido}>¿Olvidaste tu contraseña?</a>
      {modal && (
        
        <dialog style={{textAlign: "center", width: "300px", position: "fixed"}} open>
          <p>Ingrese su correo:</p>
          <input onChange={e => setCorrreoOlvido(e.target.value)} type="text" />
          <br />
          <p>Ingrese su nueva contraseña:</p>
          <input onChange={e => setContraNew(e.target.value)} type="text" aria-hidden/>
          <br />
          <button onClick={change}>Change</button>
          <button onClick={e => setModal(!modal)}>Close</button>
        </dialog>
        
      )}

      </Row>
        <Button onClick={cargarLogin} type="submit">Registrarse</Button>
      </Form>
  )
}

export default LoginBostrap
