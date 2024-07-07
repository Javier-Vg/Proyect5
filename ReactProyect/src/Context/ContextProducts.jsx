import { createContext, useContext, useEffect, useState } from "react";
import getProducts from "../service/CrudProducts/getProducts";
import axios from "axios";

export const DataContext = createContext();

export function DataContextProvider({children}) {
    // const contextData = 58;
    // const valor = contextData
    
    const [ProductsIntern ,setIntern] = useState([]);
    const [ProductsExtern, setExtern] = useState([]);

    const [Mix, setMix] = useState([]);

    const [Users, setUsers] = useState([]);

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

    
    useEffect(() => {
        setMix([...ProductsExtern, ...ProductsIntern])
    },[ProductsExtern, ProductsIntern])

    console.log(Mix);

    return(
        <DataContext.Provider value={{ProductsIntern, ProductsExtern, Users, Mix}}>
            {children}
        </DataContext.Provider>
    )
}


let useTheContext = () => useContext(DataContext)

export {useTheContext}