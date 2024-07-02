import { useContext } from "react";
import { DataContext } from "../../Context/ContextProducts";
import getProducts from "../../service/CrudProducts/getProducts";

function Appp() {

    //const contextData = useContext(DataContext)

    const turtles = [
        
        {
            name: "Leonardo",
            nickName: "Leo",
            weapon: "Katana",
            imgUrl: "https://upload.wikimedia.org/wikipedia/en/e/ed/Leonardo_%28Teenage_Mutant_Ninja_Turtles%29.jpg"
        },
        {
            name: "Donatello",
            nickName: "Don",
            weapon: "Bo staff",
            imgUrl: "https://upload.wikimedia.org/wikipedia/en/5/5a/Donatello_%28Teenage_Mutant_Ninja_Turtles%29.jpg"
        },
        {
            name: "Michelangelo",
            nickName: "Mikey",
            weapon: "Nunchucks",
            imgUrl: "https://upload.wikimedia.org/wikipedia/en/f/f3/Michelangelo_%28Teenage_Mutant_Ninja_Turtles%29.jpg"
        },
        {
            name: "Raphael",
            nickName: "Raph",
            weapon: "Sai",
            imgUrl: "https://upload.wikimedia.org/wikipedia/en/7/72/Raphael_%28Teenage_Mutant_Ninja_Tutles%29.jpg"
        }
    ]



    let get = async () => {
        let api = await getProducts()

        let objeto = api
        console.log(api);
        
        if (objeto == "interno") {

            for (const key in objeto) {

                let iterador = objeto[key];

                for (const llave in iterador) {
                    
                    if (llave == "hardwareInterno") {

                        console.log(llave);
                        console.log(iterador[llave]);
                    
                    }
                }
            }
        }
    }

    get()


    return(
        <div>
            {turtles.map((tortuga, i) => {
                return(
                    <div key={i}>
                        <h1>{tortuga.name}</h1>
                    </div>
                );
            })}
          
        </div>
    )
}

export default Appp