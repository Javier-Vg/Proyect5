import { useEffect, useRef, useState } from "react";
import getProducts from "../service/CrudProducts/getProducts"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Elementos(hardware) {

    // let [productos, setProductos] = useState();
    let p = [
        {
            carlos: "23",
            david: "50",
            javi: "19",
        },
        {
            carlos: "83",
            david: "50",
            javi: "19",
        },
        {
            carlos: "43",
            david: "50",
            javi: "19",
        },
        {
            carlos: "523",
            david: "50",
            javi: "19",
        }
    ]




    async function get() {

        let api = await getProducts()
        for (const key in api) {
            //console.log(api[key]);
            let k = api[key];
            for (const key in k) {
                console.log(k[key])
                
            }
        } 
    }

    get()

    // let cards;

     return(
            <div>
                {p.map((product, i) => {
                    return(
                        <div key={i}>
                            <h1>{product.carlos}</h1>
                        </div>
                    );
                })}
            </div> 
    )
}

export default Elementos