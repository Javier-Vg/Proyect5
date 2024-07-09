import { useEffect, useState } from "react";
import CrudProducts from "../service/CrudProducts";
import PostProduct from "../service/CrudProducts/postProduct";
import getProducts from "../service/CrudProducts/getProducts";
import deleteProductsExtern from "../service/CrudProducts/deleteProductsExtern";
import {NavLink} from "react-router-dom";
import uuid from 'react-uuid';
import Swal from "sweetalert2";
import cpu from "../assets/cpu.svg";
import auriculares from "../assets/auriculares.svg";

import { useTheContext } from "../Context/ContextProducts";

function CrudForm() {
    
    let [stock, setStock] = useState(0)
    let [nombre, setNombre] = useState()
    let [precio, setPrecio] = useState()
    let [marca, setMarca] = useState()
    let [fecha, setFecha] = useState()
    let [imgUrl, setImg] = useState()
    let [hardware, setHardware] = useState()
    let [descuento, setDescuento] = useState()
    let [categoria, setCategoria] = useState()

    //let [objetoDuplicate, setDuplicate] = useState()
    
    function handleChange(e) {
        setStock(e.target.value);
    }

    //  useEffect(() =>{
    //      console.log(objetoDuplicate);
    //  },[objetoDuplicate])

    async function handleClick() {
        let valid = 0;

        let NewProduct = {
                CoP: nombre,
                price: precio,
                stockTotal: stock,
                brand: marca,
                date: fecha,
                img: imgUrl,
                hardwareType: hardware,
                shopping: "no tiene compras",
                Descuento: descuento,
                Category: categoria,
                id: uuid()
        }

        for (const key in NewProduct) {
            console.log(NewProduct[key]);
            if (NewProduct[key] == "") {
                valid = 1;
            }
        }


        if (valid != 0) {
            Swal.fire({
                icon: "error",
                title: "Espacios vacios"
            })
        }else{

            PostProduct(NewProduct , hardware)
        }     
    }

  return (
    <>
    <div className="crudForm">
            <div style={{display: "flex", gap: "30px", marginTop: "200px"}}>
                <div>
                    <p>Gestionar Interno</p>
                    <NavLink to= "/InternStorage">
                    <button className="btnGestion" ><img src={cpu} /></button>
                    </NavLink>
                </div>

                <div>
                    <p>Gestionar Externo</p>
                    <NavLink to= "/ExternStorage">
                    <button className="btnGestion" ><img src={auriculares} /></button>
                    </NavLink>
                </div>
            </div>
            
            <form className="formCrud" >
                <h2>Añade el producto</h2>
                <label >Nombre del Componente o Periferico</label>
                <br/>
                <input type="text" onChange={(e) => setNombre(e.target.value)} required/>
                <br />
        
                <label >Precio del producto</label>
                <br/>
                <input type="number" onChange={(e) => setPrecio(e.target.value)} required/>
                <br />
                
                <label >Descuento del producto:</label>
                <br/>
                <input type="number" onChange={(e) => setDescuento(e.target.value)} required/>
                <br />
                <label >Marca del producto</label>
                <br/>
                <input type="text" onChange={(e) => setMarca(e.target.value)} required/>
                <br />
         
                <label >Stock del producto</label>
                <br/>
                <input  type="range" value={stock} onChange={handleChange} required/>
                <p>{stock}</p>
       
                <label >Fecha de iniciado de venta</label>
                <br/>
                <input type="date" onChange={(e) => setFecha(e.target.value)} required/>
                <br />
      
                <label >Url del producto:</label>
                <br/>
                <input type="text" onChange={(e) => setImg(e.target.value)} required/>
                <br />
        
                <br />
                <p>Categoria del Periferico:</p>
                <select onChange={(e) => setCategoria(e.target.value)} >
                    <option value="s" >Seleccionar</option>
                    <option value="Teclado">Teclado</option>
                    <option value="Raton" >Raton</option>
                    <option value="Microfono" >Microfono</option>
                    <option value="Camara" >Camara</option>
                    <option value="Gabinete">Gabinete</option>
                    <option value="FuentesAlimentacion" >Fuentes de alimentacion </option>
                    <option value="Audio" >Audio</option>
                    <option value="Mandos" >Mandos</option>
                    <option value="Sillas" >Silla</option>
                    <option value="Monitores" >Monitores</option>

                </select>
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
            
                <button style={{fontSize:"24px", padding: "10px", borderRadius: "10px", backgroundColor: "#48e", color:"white"}} onClick={handleClick}>Registrar Producto</button>
            </form>

    </div>
           

    </>
  )
}


export default CrudForm;