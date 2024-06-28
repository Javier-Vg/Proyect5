
import { useState,useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function UsuarioActivo() {

  const navigate = useNavigate();

    const [users, setUsers] = useState([]);
    const [cargando, setLoading] = useState(true);
    const [valor, setValor] = useState();

    let usuarioActivo = localStorage.getItem("userActive");

    useEffect(() => {
        axios.get('http://localhost:3001/users')
          .then(response => {
            setUsers(response.data);
            setLoading(false);
          })
          .catch(error => {
            setLoading(false);
            console.log(error);
          });
    },[]);

    if (cargando) return <p>Loading...</p>;
    
    function SearchUser() {
        users.forEach(user => {
            if (user.correo == usuarioActivo) {
                setValor(user.correo)
            } 
        })
    }

    function sesionClose() {
      localStorage.removeItem("userActive")
      localStorage.removeItem("userValid")
      setTimeout(() => {
        navigate("/")
      }, 1000);
    }
    
  return(
    <>
    <div>
      <h1>Bienvenido</h1>
      <SearchUser/>
      {valor}
      <button onClick={sesionClose}>Cerrar Sesion</button>
    </div>
    </>
  )
}

export default UsuarioActivo