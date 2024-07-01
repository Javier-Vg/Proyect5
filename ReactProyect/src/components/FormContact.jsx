import { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
//import resend from '../../nodemailer';

function FormContact() {

  let [correo, setCorreo] = useState()
  let [comentario, setComentario] = useState()

  function handleClick() {
    if (correo == "" || comentario == "") {
      alert("Espacios vacios, no puede enviar el comentario")
    }
  }

  let estilo = {
    width: "200px",
    color: "blue"
  }

  return (
    <>

      <FloatingLabel
        controlId="floatingInput"
        label="Su correo:"
        className="mb-3"
      >
        <Form.Control onChange={(e) =>setCorreo(e.target.value)} type="email" placeholder="name@example.com" />
      </FloatingLabel>
        
      <FloatingLabel controlId="floatingPassword" label="Comentario">
        <Form.Control onChange={(e) =>setComentario(e.target.value)} type="text" placeholder="Comentario" />
      </FloatingLabel>

      <button style={estilo} onClick={handleClick}>Enviar</button>
      
    </>
  );
}

export default FormContact;