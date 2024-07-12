import Nabvar from "../../components/navbar";
import { NavLink } from "react-router-dom";
import ElementosIntern from "../../components/elementosIntern";
import Footer from "../../components/footer";

function ProductsManejo() {
  return (
    <>
      <Nabvar />
      <ElementosIntern />

      <NavLink to="/crud">Volver</NavLink>
      <Footer />
    </>
  );
}

export default ProductsManejo;
