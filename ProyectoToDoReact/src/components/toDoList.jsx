
import { useState,useEffect } from 'react'

function Inicio() {

    // let [contador,setContador] = useState(0)

    // function cont() {
        
    // }

  return (
    <div className="divCore">

        <div className="divSubCentral">
            <div>
                <h1>Tareas por hacer</h1>
            </div>
            <div>
                <form >
                    <input className="inputTask" type="text" placeholder="Describir tarea:" required/>
                    <br/>
                    <br/>
                    <button>Agregar</button>
                </form>
            </div>
            <div>
                <input className="inputSearch" type="text" placeholder="Buscar por tarea:"/>
            </div>
        
            <div className="divTareasCompletas">
                <div>
                    <h2>Tareas Completadas</h2>
                </div>
                <div>
                    <div className="contadorDiv">0</div>
                </div>
            </div>
        </div>

        <div className="divTareas">
            <h1>No hay tareas</h1>
        </div>
    </div>
  )
}

export default Inicio