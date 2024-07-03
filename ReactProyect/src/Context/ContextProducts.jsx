import { createContext, useContext, useEffect, useState } from "react";
import getProducts from "../service/CrudProducts/getProducts";
import axios from "axios";

export const DataContext = createContext();

export function DataContextProvider({children}) {
    // const contextData = 58;
    // const valor = contextData
    const [ProductsIntern ,setIntern] = useState(0)
    const [ProductsExtern, setExtern] = useState(0)
    const [Users, setUsers] = useState(0)

    //Contexto del getProductos

    //Retorna id especifico

    useEffect(() => {
        axios.get('http://localhost:3005/hardwareExterno')
        .then(response => {
            //Llamo a la funcion, le paso la respuesta del axios
            CallingExterno(response.data)
        })
        function CallingExterno(JSONN) {
            console.log(JSONN);
            setExtern(JSONN)
        }
    },[])


    useEffect(() => {
        axios.get('http://localhost:3005/hardwareInterno')
        .then(response => {
            //Llamo a la funcion, le paso la respuesta del axios
            CallingInterno(response.data)
        })
        function CallingInterno(JSONN) {

            console.log(JSONN);
            setIntern(JSONN)
        }
    },[])


    useEffect(() => {
        axios.get('http://localhost:3005/users')
        .then(response => {
            //Llamo a la funcion, le paso la respuesta del axios
            CallingInterno(response.data)
        })
        function CallingInterno(JSONN) {

            console.log(JSONN);
            setUsers(JSONN)
        }
    },[])
    

    return(
        <DataContext.Provider value={{ProductsIntern, ProductsExtern, Users}}>
            {children}
        </DataContext.Provider>
    )
}


let useTheContext = () => useContext(DataContext)

export {useTheContext}