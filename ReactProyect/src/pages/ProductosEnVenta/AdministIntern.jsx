import Nabvar from "../../components/navbar";
import {NavLink} from "react-router-dom";
import ElementosIntern from "../../components/elementosIntern";
import { useTheContext } from "../../Context/ContextProducts";

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
    </>
    
  )
}

export default ProductsManejo