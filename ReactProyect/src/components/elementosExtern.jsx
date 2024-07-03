import { useEffect, useRef, useState } from "react";
import getProducts from "../service/CrudProducts/getProducts"
import Card from 'react-bootstrap/Card';
import { useTheContext } from "../Context/ContextProducts";
import ModalExterno from "./ModalExterno";

function ElementosExtern() {

    const {ProductsIntern, setIntern, ProductsExtern, setExtern} = useTheContext();
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
        <div className="divExternoElementos">
                {ProductsExtern.map((product, i) => {
                    return(
                        <>
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
                                <button onClick={toggleModal} className="btn-modal" id={product.id}>Gestionar</button>
                            </Card.Body>
                            </Card> 
                        </div> 
                        { <ModalExterno id={id} isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} /> }
                        </>
                    )
                })}
        </div> 
        </>

    )    
}


export default ElementosExtern