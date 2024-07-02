import { useEffect, useRef, useState } from "react";
import getProducts from "../service/CrudProducts/getProducts"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useTheContext } from "../Context/ContextProducts";
import BotonCapturar from "./BotonCapturar";

function ElementosIntern() {
    const {ProductsIntern, setIntern, ProductsExtern, setExtern} = useTheContext()

    // let [productos, setProductos] = useState();
    let [valor, setValor] = useState()

    let v = useRef([])

    // let cards;

    function y(p) {
        console.log(p);
        alert(p.value)
    }
    

     return(
            <div className="divInternoElementos">
                {ProductsIntern.map((product) => {
                    return(
                        <div key={product.id}>
                            <Card style={{ width: '18rem'}}>
                                <Card.Img style={{ width: '250px', height: "250px", margin: "auto"}} variant="top" src={product.img} alt="sin img, sorry" />
                                <Card.Body>
                                <Card.Title>{product.CoP}</Card.Title>
                                <Card.Title>{product.brand}</Card.Title>
                                <h3>Stock Total: {product.stockTotal}</h3>
                                <Card.Text>
                                Con este componente vas a tener la mejor experiencia de tu vida.
                                </Card.Text>
                                <p>{product.date}</p>
                                <Button onClick={(() => y(product.id))} variant="primary">Gestionar</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    );
                })}
            </div>      
    )
}

export default ElementosIntern