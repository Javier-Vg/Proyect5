import { useState } from "react";
import Card from "react-bootstrap/Card";
import ModalInterno from "./modales/ModalInterno";
import { useTheContext } from "../Context/ContextProducts";
import gestionar from "../assets/gestionar.svg";

function ElementosIntern() {
  const { ProductsIntern } = useTheContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [id, setId] = useState(0);

  // let [productos, setProductos] = useState();

  const toggleModal = ((id) => {
    setId(id)
    setIsModalOpen(true);
  })

  return (
    <>
      <div className="divInternoElementos">
        {ProductsIntern.map((product) => {
          return (
            <div key={product.id}>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  style={{ width: "250px", height: "250px", margin: "auto" }}
                  variant="top"
                  src={product.img}
                  alt="sin img, sorry"
                />
                <Card.Body>
                  <Card.Title>{product.CoP}</Card.Title>
                  <Card.Title>{product.brand}</Card.Title>
                  <h3>Stock Total: {product.stockTotal}</h3>
                  <Card.Text>
                    Con este componente vas a tener la mejor experiencia de tu
                    vida.
                  </Card.Text>
                  <p>{product.date}</p>
                  <button //Llama a la funcion y toma como valor el id de la card.
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
          );
        })}
      </div>

      {
        <ModalInterno //Manda props a otra funcion
          id={id}
          isOpen={isModalOpen}
          closeModal={() => setIsModalOpen(false)}
        />
      }
    </>
  );
}

export default ElementosIntern;
