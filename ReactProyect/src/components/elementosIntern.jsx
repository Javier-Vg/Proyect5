import { useEffect, useRef, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ModalInterno from "./ModalInterno";
import { useTheContext } from "../Context/ContextProducts";

function ElementosIntern() {
    const {ProductsIntern} = useTheContext();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [id, setId] = useState(5);

    // let [productos, setProductos] = useState();

    const toggleModal = () => {

        const botones = document.getElementsByClassName('btn-modal');
        for (let i = 0; i < botones.length; i++) {
            botones[i].addEventListener("click", function() {

                let btn_actual = this;
                setId(btn_actual.id)
                setIsModalOpen(true)

            });
        } 
    }

     return(
        <>
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
                                <Button onClick={toggleModal} className="btn-modal" id={product.id} variant="primary">Gestionar</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    );
                })}
            </div>
            

            { <ModalInterno id={id} isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} /> }
        </>
                  
    )
}

export default ElementosIntern