import { useEffect, useState } from "react";
import CrudProducts from "../service/CrudProducts";
import PostProduct from "../service/CrudProducts/postProduct";
import getProducts from "../service/CrudProducts/getProducts";
import deleteProducts from "../service/CrudProducts/deleteProducts";


function CrudForm() {
    let duplicate;
    let id;
    
    let [stock, setStock] = useState(0)
    let [nombre, setNombre] = useState(0)
    let [precio, setPrecio] = useState(0)
    let [marca, setMarca] = useState(0)
    let [fecha, setFecha] = useState(0)
    let [imgUrl, setImg] = useState(0)
    let [hardware, setHardware] = useState(0)
    let [perific, setPerific] = useState()
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
            PerifericType: perific
            }
        

        let api = await getProducts()

        let objeto = api
        
        if (hardware == "interno") {

            for (const key in objeto) {

                let iterador = objeto[key];

                for (const llave in iterador) {
                    
                    if (llave == "hardwareInterno") {

                        id = iterador.id;
                        duplicate = iterador.hardwareInterno;
                    }
                }
            }

            console.log(id);
            console.log(duplicate);

            duplicate.push(NewProduct)
            console.log(duplicate);
            
            
            console.log(hardware);
            deleteProducts(id)
            PostProduct(duplicate , hardware)
            
        }else{
            
            for (const key in objeto) {

                let iterador = objeto[key];

                for (const llave in iterador) {

                    if (llave == "hardwareExterno") {

                        id = iterador.id;
                        duplicate = iterador.hardwareExterno;

                    }
                }
            }

            console.log(id);
            duplicate.push(NewProduct)
            console.log(duplicate);
            
            deleteProducts(id)
            PostProduct(duplicate , hardware)

        }
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

            <div className="divRadios">
                <div>
                    Entrada
                    <input id="radio" className="PerifericosEntrada" type="radio"  onChange={(e) => setPerific(e.target.className)} name="optionP" />
                </div>
                <div>
                    Salida
                    <input id="radio" className="PerifericosSalida" type="radio"  onChange={(e) => setPerific(e.target.className)} name="optionP"/>
                </div>
            </div>

            <div>
                <label >Precio del producto</label>
                <br/>
                <input type="text" onChange={(e) => setPrecio(e.target.value)} required/>
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
                <label >Imagen del producto</label>
                <br/>
                <input type="file" onChange={(e) => setImg(e.target.value)} required/>
                <br />
            </div>
            <br />
            
            <div className="divRadios">
                <div>
                    Externo
                    <input id="radio" className="externo" type="radio"  onChange={(e) => setHardware(e.target.className)} name="option" />
                </div>
                <div>
                    Interno
                    <input id="radio" className="interno" type="radio"  onChange={(e) => setHardware(e.target.className)} name="option"/>
                </div>
            </div>
            <button onClick={handleClick}>Registrar Producto</button>
        </form>
    </div>

    </>
  )
}

export default CrudForm;