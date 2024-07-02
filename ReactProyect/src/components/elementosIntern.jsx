import { useEffect, useRef, useState } from "react";
import getProducts from "../service/CrudProducts/getProducts"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useTheContext } from "../Context/ContextProducts";

function ElementosIntern() {
    const {ProductsIntern, setIntern, ProductsExtern, setExtern} = useTheContext()

    // let [productos, setProductos] = useState();

    function handleClick(id) {
        alert(id)
    }


    // let cards;

     return(
            <div className="divInternoElementos">
                {ProductsIntern.map((product, i) => {
                    return(
                        <div  key={i}>
                            
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
                                <Button onClick={handleClick(product.id)} variant="primary">Gestionar</Button>
                                </Card.Body>
                            </Card>
                            
                        </div>
                    );
                })}
            </div> 
    )
}

export default ElementosIntern