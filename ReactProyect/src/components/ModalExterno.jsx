import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Swal from 'sweetalert2'
import deleteProductsExtern from "../service/CrudProducts/deleteProductsExtern";

const Modal = ({id, isOpen, closeModal }) => {

  if (!isOpen) return null;

  async function borrar() {
    alert(id)
    const response = await fetch('http://localhost:3005/hardwareExterno/'+id, {
      method: 'DELETE',
    });
    
    Swal.fire({
        icon: "success",
        title: "Eliminado con exito"
    })
  }
  async function edit() {
    alert(id)
  }

  return (
    <div className="modal">

      <AiOutlineClose
        size={30}
        color="blue"
        onClick={closeModal}
      />
      <div className="containerr">
        <h3>Opciones:</h3>
        <button onClick={borrar}>Eliminar</button>
        <button onClick={edit}>Edit</button>
      
      </div>
    </div>
  );
};

export default Modal;