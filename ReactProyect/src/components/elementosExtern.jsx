import { useEffect, useRef, useState } from "react";
import getProducts from "../service/CrudProducts/getProducts"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useTheContext } from "../Context/ContextProducts";

function ElementosExtern() {
    const {ProductsIntern, setIntern, ProductsExtern, setExtern} = useTheContext();

    // let [productos, setProductos] = useState();

    function handleClick() {
        alert("Gestion")
    }

    // let cards;
    console.log(ProductsExtern);

     return(
            <div className="divExternoElementos">
                {ProductsExtern.map((product, i) => {
                    return(
                        <div key={i}>
                            <Card  style={{ width: '18rem' }}>
                            <Card.Img style={{ width: '250px', height: "230px", margin: "auto"}} variant="top" src={product.img} alt="sin img, sorry" />
                            <Card.Body>
                                <h3>{product.CoP}</h3>
                                <h4>{product.brand}</h4>
                                <Card.Title>Stock Total: {product.stockTotal}</Card.Title>
                                <Card.Text>
                                Con este componente vas a tener la mejor experiencia de tu vida.
                                </Card.Text>
                                <p>{product.date}</p>
                                <Button onClick={handleClick} variant="primary">Gestionar</Button>
                            </Card.Body>
                            </Card> 
                        </div>
                    );
                })}
            </div> 
    )    
}

export default ElementosExtern