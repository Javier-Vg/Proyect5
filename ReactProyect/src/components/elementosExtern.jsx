import {  useState } from "react";
import Card from "react-bootstrap/Card";
import { useTheContext } from "../Context/ContextProducts";
import ModalExterno from "./modales/ModalExterno";
import gestionar from "../assets/gestionar.svg";

function ElementosExtern() {
  const { ProductsExtern } = useTheContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [id, setId] = useState(5);


  const toggleModal = ((id) => {
    setId(id)
    setIsModalOpen(true);
  })

  return (
    <>
      <div className="divExternoElementos">
        {ProductsExtern.map((product, i) => { //Mapeo de objeto 
          return (
            <>
              <div key={i}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    style={{ width: "250px", height: "230px", margin: "auto" }}
                    variant="top"
                    src={product.img}
                    alt="sin img, sorry"
                  />
                  <Card.Body>
                    <h3>{product.CoP}</h3>
                    <h4>{product.brand}</h4>
                    <Card.Title>Stock Total: {product.stockTotal}</Card.Title>
                    <Card.Text>
                      Con este componente vas a tener la mejor experiencia de tu
                      vida.
                    </Card.Text>
                    <p>{product.date}</p>
                    
                    <button 
                      style={{ margin: "center", borderRadius: "20px" }}
                      onClick={() => toggleModal(product.id)}
                      className="btn-modal"
                      id={product.id}
                    >
                      <img src={gestionar} alt="gestion" />
                    </button>
                  </Card.Body>
                </Card>
              </div>

              {
                <ModalExterno //Pasa como props a otro archivo
                  id={id}
                  isOpen={isModalOpen}
                  closeModal={() => setIsModalOpen(false)}
                />
              }
            </>
          );
        })}
      </div>
    </>
  );
}

export default ElementosExtern;
