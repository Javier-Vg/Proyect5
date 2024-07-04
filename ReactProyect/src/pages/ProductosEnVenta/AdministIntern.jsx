import Nabvar from "../../components/navbar";
import {NavLink} from "react-router-dom";
import ElementosIntern from "../../components/elementosIntern";
import { useTheContext } from "../../Context/ContextProducts";
import Footer from "../../components/footer";

function ProductsManejo() {
  const {ProductsIntern, setIntern, ProductsExtern, setExtern} = useTheContext();

   //console.log(ProductsExtern);
   //console.log(ProductsIntern);
   
  return (
    <>
      <Nabvar/>
      {/* <Elementos hardware={"hardwareInterno"}/> */}
      {/*<Appp/> */}

        <ElementosIntern />

      <NavLink to="/crud">Volver</NavLink>
      <Footer/>
    </>
    
  )
}

export default ProductsManejo