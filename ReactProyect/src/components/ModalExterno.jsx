import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Swal from 'sweetalert2'
import deleteProductsExtern from "../service/CrudProducts/deleteProductsExtern";

const ModalExterno = ({id, isOpen, closeModal }) => {
  const [modal, setModal] = useState(false);

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
    setModal(!modal)
    //alert(id)
  }

  return (

    <>
    { modal && (
        <dialog className="M-int" open>
            <h3>chao mundo</h3>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias doloremque reprehenderit consequuntur delectus corrupti, nobis aliquid beatae? Ab voluptas nostrum laboriosam ullam quidem. Vitae, ipsa ex. Quod voluptas quae aut.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto quidem incidunt aperiam? Doloremque exercitationem eos, consequatur soluta accusantium alias quo labore tenetur dicta quis architecto ipsum id quas modi possimus?
        </dialog>
    )}
    
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
    </>

    
  );
};

export default ModalExterno;