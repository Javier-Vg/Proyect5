import { createContext, useContext, useEffect, useState } from "react";
import getProducts from "../service/CrudProducts/getProducts";
import axios from "axios";

export const DataContext = createContext();

export function DataContextProvider({children}) {
    // const contextData = 58;
    // const valor = contextData
    const [ProductsIntern ,setIntern] = useState(0)
    const [ProductsExtern, setExtern] = useState(0)

    //Contexto del getProductos

    useEffect(() => {
        axios.get('http://localhost:3005/products')
        .then(response => {

            //Llamo a la funcion, le paso la respuesta del axios
            CallingResponse(response.data)
        })

        function CallingResponse(JSONN) {

            console.log(JSONN);
            for (const key in JSONN) {
                //console.log(api[key]);
                let k = JSONN[key];
                for (const key in k) {
                    if (key == "hardwareInterno") {
                        //console.log("Interno");
                        //console.log(k[key]);
                        setIntern(k[key])
                    }else if(key == "hardwareExterno"){
                        //console.log("Externo");
                        //console.log(k[key]);
                        setExtern(k[key])
                    }
                }
            } 
        }

    },[])

    // useEffect(() => {

    // },[]);

    // useEffect(()=>{
        
    // }, [data])

    return(
        <DataContext.Provider value={{ProductsIntern, setIntern, ProductsExtern, setExtern}}>
            {children}
        </DataContext.Provider>
    )
}


let useTheContext = () => useContext(DataContext)

export {useTheContext}