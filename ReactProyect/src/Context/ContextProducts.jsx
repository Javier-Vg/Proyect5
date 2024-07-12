import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

//Exporto de la libreria de react el contexto en donde va a contener mi contexto de variables.
export const DataContext = createContext();

export function DataContextProvider({children}) { //La propiedad children se usa para que los archivos pueden heredar el contexto.
    
    const [ProductsIntern ,setIntern] = useState([]);
    const [ProductsExtern, setExtern] = useState([]);

    const [Mix, setMix] = useState([]);

    const [Users, setUsers] = useState([]);

    //Contexto del getProductos
    useEffect(() => {
        axios.get('http://localhost:3005/hardwareExterno')
        .then(response => {
            //Llamo a la funcion, le paso la respuesta del axios
            CallingExterno(response.data)
        })
        function CallingExterno(JSONN) {
            setExtern(JSONN)
        }
    },[ProductsExtern]);

    useEffect(() => {
        axios.get('http://localhost:3005/hardwareInterno')
        .then(response => {
            //Llamo a la funcion, le paso la respuesta del axios
            CallingInterno(response.data)
        })
        function CallingInterno(JSONN) {

            setIntern(JSONN)
        }
    },[ProductsIntern]);

    useEffect(() => {
        axios.get('http://localhost:3005/users')
        .then(response => {
            //Llamo a la funcion, le paso la respuesta del axios
            CallingInterno(response.data)
        })
        function CallingInterno(JSONN) {

            setUsers(JSONN)
        }
    },[Users]);

    //Unifico las respuestas de los 2 endPoints de productos y lo mando a contexto
    useEffect(() => {
        setMix([...ProductsExtern, ...ProductsIntern])
    },[ProductsExtern, ProductsIntern]);


    return(
        <DataContext.Provider value={{ProductsIntern, ProductsExtern, Users, Mix}}>
            {children}
        </DataContext.Provider>
    )
}
//Creo una nueva variable donde voy a utizar el provider para que se pueda usar en otros archivos jsx.
let useTheContext = () => useContext(DataContext)

export {useTheContext}