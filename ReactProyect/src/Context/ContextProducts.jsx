import { createContext, useContext, useEffect, useState } from "react";

export const DataContext = createContext();

export function DataContextProvider({children}) {
    // const contextData = 58;
    // const valor = contextData

    const [state ,setState ] = useState('')
    const [data, setUpdate] = useState(0)

    useEffect(()=>{
        
    }, [data])
    return(
        <DataContext.Provider value={{data, setState, state, setUpdate}}>
            {children}
        </DataContext.Provider>
    )
}


export useTheContext = () => useContext(DataContext)