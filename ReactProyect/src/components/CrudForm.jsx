import { useEffect, useState } from "react";
import CrudProducts from "../service/CrudProducts";
import PostProduct from "../service/CrudProducts/postProduct";
import getProducts from "../service/CrudProducts/getProducts";
import deleteProductsExtern from "../service/CrudProducts/deleteProductsExtern";
import uuid from 'react-uuid';
import Swal from "sweetalert2";

import { useTheContext } from "../Context/ContextProducts";

function CrudForm() {
    
    let [stock, setStock] = useState(0)
    let [nombre, setNombre] = useState(0)
    let [precio, setPrecio] = useState(0)
    let [marca, setMarca] = useState(0)
    let [fecha, setFecha] = useState(0)
    let [imgUrl, setImg] = useState(0)
    let [hardware, setHardware] = useState(0)
    let [descuento, setDescuento] = useState(0)

    //let [objetoDuplicate, setDuplicate] = useState()
    
    function handleChange(e) {
        setStock(e.target.value);
    }
    
    //  useEffect(() =>{
    //      console.log(objetoDuplicate);
    //  },[objetoDuplicate])

    async function handleClick() {

        let NewProduct = {
            CoP: nombre,
            price: precio,
            stockTotal: stock,
            brand: marca,
            date: fecha,
            img: imgUrl,
            hardwareType: hardware,
            shopping: 0,
            Descuento: descuento,
            id: uuid()
        }


        PostProduct(NewProduct , hardware)

        Swal.fire({
            icon: "success",
            text: "Se registro correctamente!",
          });
        
    }

  return (
    <>
    <div className="crudForm">
        <h2>Añade el producto</h2>
        <form >
            <div>
                <label >Nombre del Componente o Periferico</label>
                <br/>
                <input type="text" onChange={(e) => setNombre(e.target.value)} required/>
                <br />
            </div>

            <div>
                <label >Precio del producto</label>
                <br/>
                <input type="number" onChange={(e) => setPrecio(e.target.value)} required/>
                <br />
                
            </div>

            <div>
                <label >Descuento del producto:</label>
                <br/>
                <input type="number" onChange={(e) => setDescuento(e.target.value)} required/>
                <br />
            </div>

            <div>
                <label >Marca del producto</label>
                <br/>
                <input type="text" onChange={(e) => setMarca(e.target.value)} required/>
                <br />
            </div>

            <div>
                <label >Stock del producto</label>
                <br/>
                <input  type="range" value={stock} onChange={handleChange} required/>
                <p>{stock}</p>
            </div>

            <div>
                <label >Fecha de iniciado de venta</label>
                <br/>
                <input type="date" onChange={(e) => setFecha(e.target.value)} required/>
                <br />
            </div>

            <div>
                <label >Url del producto:</label>
                <br/>
                <input type="text" onChange={(e) => setImg(e.target.value)} required/>
                <br />
            </div>
            <br />
            
            <div className="divRadios">
                <div>
                    Externo
                    <input id="radio" className="hardwareExterno" type="radio"  onChange={(e) => setHardware(e.target.className)} name="option" />
                </div>
                <div>
                    Interno
                    <input id="radio" className="hardwareInterno" type="radio"  onChange={(e) => setHardware(e.target.className)} name="option"/>
                </div>
            </div>
            <button onClick={handleClick}>Registrar Producto</button>
        </form>

    </div>
           

    </>
  )
}


export default CrudForm;