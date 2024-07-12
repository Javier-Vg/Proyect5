import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useTheContext } from "../../Context/ContextProducts";
import out from "../../assets/out.svg";
import carrito from "../../assets/carrito.svg";
import compra from "../../assets/compra.svg";
import Swal from "sweetalert2";
import { useEffect, useRef, useState } from "react";
import putPatch from "../../service/putPatch";
import { useNavigate } from "react-router-dom";

function ComplExt() {
  const navigate = useNavigate(); //Instancia para navegar entre paginas

  const { ProductsExtern, Users } = useTheContext(); //Uso el contexto de endPoint de los productos y usuarios, llamando al api dentro de los contextos

  let sesion = localStorage.getItem("userValid"); //Usuario actualmente registrado
  const [unidadesState, setUnidades] = useState();

  const [reload, setReload] = useState(0);
  const unidadesRef = useRef([]);

  let ProductoEnCarrito = useRef();

  let contador = useRef(0);

  const DatosMostrarModal = useRef(); //Almaceno los datos del producto en una referencia para luego mostrarlo.
  const jjj = useRef([]); //Guardo el id del elemento clickeado en la referencia
  const stock = useRef([]); //Guardo el stock del producto del elemento clickeado.

  const [Modal, setModal] = useState(false); //Modal se inicia el false para que no se muestre.

  //Resetea el contador al salir del modal.
  if (Modal == false) {
    contador.current = 0;
    unidadesRef.current = 0;
  }

  function buy() {
    //Funcion donde ocurre la compra del producto
    if (sesion == undefined) {
      Swal.fire({
        icon: "info",
        text: "Tiene que registrarse para comprar productos.",
      });
    } else {
      //Itero sobre los elementos y capto el id del boton clickeado y seguidamente guardo los valores en una referencia.
      const botones = document.getElementsByClassName("card");
      for (let i = 0; i < botones.length; i++) {
        botones[i].addEventListener("click", function () {
          let btn_actual = this;
          jjj.current = btn_actual.id;
          stock.current = btn_actual.stockTotal;

          //Itero sobre el api del producto:
          for (const key in ProductsExtern) {
            if (ProductsExtern[key].id == jjj.current) {
              //Si no hay stock, no puede comprar el producto.
              if (ProductsExtern[key].stockTotal == 0) {
                Swal.fire({
                  icon: "error",
                  text: "Este producto esta agotado.",
                });
              } else {
                //Descuento calculo
                let PorcentajeDescuento = ProductsExtern[key].Descuento;
                console.log(PorcentajeDescuento);

                //Ciclo donde manejo y calculo el descuento aplicado al producto
                for (let index = 100; index > PorcentajeDescuento; index--) {
                  if (PorcentajeDescuento < index) {
                    contador.current = contador.current + 1;
                  }
                }

                //Calculo del precio con el descuento aplicado
                let DescuentoFinal =
                  (contador.current / 100) * ProductsExtern[key].price;
                DatosMostrarModal.current = [
                  ProductsExtern[key].Descuento,
                  ProductsExtern[key].price,
                  DescuentoFinal,
                  ProductsExtern[key].img,
                  ProductsExtern[key].stockTotal,
                  ProductsExtern[key].id,
                ];

                setModal(!Modal); //Muestro el modal
              }
            }
          }
        });
      }
    }
  }

  //Renderizo el input range
  const SeteoUnidades = (e) => {
    setUnidades(e.target.value);
    unidadesRef.current = [e.target.value];
  };

  //Manejo de compra realizada por el usuario:
  const compraRealizada = () => {
    let unidadesSeleccionadas = unidadesRef.current[0];
    let precioProducto = DatosMostrarModal.current[1];

    let gastoTotal = unidadesSeleccionadas * precioProducto;
    let ChangeStock = DatosMostrarModal.current[4] - unidadesSeleccionadas;

    //Objeto que va a modificar el api del producto, en este caso el stock del producto
    let StockDesaumento = {
      stockTotal: ChangeStock,
    };

    //Mando 3 parametros al put, utilizo put patch para que modifique solo el valor del stock y no afecte a los demas
    putPatch(DatosMostrarModal.current[5], StockDesaumento, "hardwareExterno");

    //Itero sobre los usuarios, y capto el id para luego modificar un valor de la api, en este caso los gastos de las compras
    for (const key in Users) {
      if (Users[key].id == sesion) {
        //Objeto que guardara los datos editados.
        let GastoGeneral = {
          comprasRecuento: gastoTotal + parseInt(Users[key].comprasRecuento),
          CantidadCompras:
            parseInt(unidadesSeleccionadas) +
            parseInt(Users[key].CantidadCompras),
        };
        //Realizo el put al usuario registrado:
        putPatch(sesion, GastoGeneral, "users");

        navigate("/home");

        setTimeout(() => {
          navigate("/show1");
        }, "1");
      }
    }
    //Muestro el modal
    setModal(!Modal);

    Swal.fire({
      title: "Comprado Exitosamente!",
      text: "Tu producto llegara a tu casa lo mas antes posible.",
      icon: "success",
    });

    //alert(gastoTotal)
  };

  //Funcion donde se gestiona el carrito de compras
  function car(e) {
    if (sesion == undefined) {
      Swal.fire({
        icon: "info",
        text: "Tiene que registrarse para comprar productos.",
      });
    } else {
      Swal.fire({
        text: "¿Quieres agregar este producto al carrito?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si",
      }).then((result) => {
        if (result.isConfirmed) {
          for (const j in Users) {
            //Itero sobre los usuarios con el fin de extraer el valor del api de registro del carrito
            if (Users[j].id == sesion) {
              if (Users[j].carrito != 0) {
                // si ya existe un registro en el carrito, hago un metodo push al nuevo producto
                let carroPrevio = Users[j].carrito;

                for (const i in ProductsExtern) {
                  //Itero sobre los productos con el fin de extraer el valor del api del producto especifico que clickeo
                  if (e.target.id == ProductsExtern[i].id) {
                    let ProductoEnCarrito = ProductsExtern[i];

                    carroPrevio.push(ProductoEnCarrito);

                    const Prdct = {
                      carrito: carroPrevio,
                    };

                    putPatch(sesion, Prdct, "users");
                    //Forma de renderizar la pagina:
                    navigate("/");

                    setTimeout(() => {
                      navigate("/show1");
                    }, "1");
                  }
                }
              } else {
                //Si en el carrito no habia nada en su valor, entonces crea un nuevo array de objetos.
                for (const i in ProductsExtern) {
                  if (e.target.id == ProductsExtern[i].id) {
                    let Arreglo = [];
                    ProductoEnCarrito.current = ProductsExtern[i];

                    Arreglo.push(ProductoEnCarrito.current);

                    const Prdct = {
                      carrito: Arreglo,
                    };

                    putPatch(sesion, Prdct, "users");
                    //Renderiza el carrito
                    setReload(2);
                  }
                }
              }
            }
          }

          Swal.fire({
            title: "Agregado!",
            text: "Agregaste este producto al carrito.",
            icon: "success",
          });
        }
      });
    }
  }

  return (
    <>
      <div className="CompIntDiv">
        {ProductsExtern.map((product, i) => {
          //Mapeo los elementos del api con el metodo .map
          return (
            <div id="categoria" className="filter" key={i}>
              <Card style={{ width: "15rem" }}>
                <Card.Img
                  className="imgProducClient"
                  variant="top"
                  src={product.img}
                />
                <Card.Body>
                  <Card.Title>{product.CoP}</Card.Title>
                  <Card.Text>
                    <strong>${product.price}</strong>
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>Categoria: {product.Category}</ListGroup.Item>
                  <ListGroup.Item>Marca: {product.brand}</ListGroup.Item>
                  <ListGroup.Item>Stock: {product.stockTotal}</ListGroup.Item>
                  <ListGroup.Item>
                    Fecha de venta: {product.date}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Descuento: {product.Descuento}%
                  </ListGroup.Item>
                </ListGroup>
                <Card.Body>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "40px 300px",
                      gridTemplateRows: "40px 40px",
                    }}
                  >
                    <div>
                      <Card.Link onClick={buy}>
                        <img src={compra} id={product.id} className="card" />
                      </Card.Link>
                    </div>
                    <div style={{ color: "blue" }}>Comprar Producto</div>
                    <div>
                      <Card.Link
                        onClick={(e) => {
                          car(e);
                        }}
                      >
                        <img src={carrito} id={product.id} className="card" />
                      </Card.Link>
                    </div>
                    <div style={{ color: "blue" }}>Agregar Carrito</div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          );
        })}

        {ProductsExtern == "" ? ( //Si en el api no hay registro de ningun elemento, muestra un mensaje que no hay productos disponibles.
          <>
            <div style={{ width: " 500px", marginLeft: "450px" }}>
              <h2 style={{ margin: "auto", fontFamily: "arial" }}>
                No hay productos a la venta.
              </h2>
              <img src={out} alt="out" />
            </div>
          </>
        ) : (
          <p style={{ display: "none" }}>A la venta</p>
        )}
      </div>

      {Modal && ( //Muestra el modal donde se realizara el proceso de compra
        <div
          className="divModalProcesoCompra"
          style={{ borderRadius: "14px" }}
          open
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "220px 350px",
              padding: "20px",
              border: "3px solid black",
              borderRadius: "10px",
            }}
          >
            <div>
              <img
                src={DatosMostrarModal.current[3]}
                style={{
                  width: "200px",
                  height: "200px",
                  borderColor: "red",
                  border: "5px solid black",
                  borderRadius: "10px",
                }}
              />
            </div>

            <div>
              <p style={{ fontSize: "20px" }}>
                Precio Original: ${DatosMostrarModal.current[1]}
              </p>
              <p style={{ fontSize: "20px" }}>
                Descuento: {DatosMostrarModal.current[0]}%
              </p>
              <p style={{ fontSize: "20px" }}>
                Precio Final:{" "}
                <p style={{ color: "green" }}>
                  ${DatosMostrarModal.current[2]}
                </p>
              </p>
            </div>
          </div>

          <div style={{ display: "flex", padding: "10px" }}>
            <div>
              <label>¿Cuantas unidades desea comprar?</label>
            </div>
            <div>
              <input
                onChange={(e) => SeteoUnidades(e)}
                type="range"
                max={DatosMostrarModal.current[4]}
                style={{ width: "200px" }}
              />
            </div>
            <div>
              <div>{unidadesState}</div>
            </div>
          </div>

          <button
            onClick={compraRealizada}
            style={{
              backgroundColor: "#48e",
              color: "white",
              border: "none",
              fontSize: "25px",
              borderRadius: "10px",
            }}
          >
            Comprar
          </button>
        </div>
      )}
    </>
  );
}

export default ComplExt;
