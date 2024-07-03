import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import Swal from 'sweetalert2'

const Modal = ({id, isOpen, closeModal }) => {
  if (!isOpen) return null;

  console.log(id);
  function modific() {
    Swal.fire({
        icon: "success",
        title: "Eliminar esta vaina"
      })
  }
  function edit() {
    Swal.fire({
        icon: "success",
        title: {id}
      })
  }

  return (
    <div className="modal">

      <AiOutlineClose
        size={30}
        color="blue"
        onClick={closeModal}
      />
      <div className="containerr">
        <button onClick={modific}>Modific</button>
        <button onClick={edit}>Edit</button>
      
        <h3>Tunometecabra</h3>
      </div>
    </div>
  );
};

export default Modal;