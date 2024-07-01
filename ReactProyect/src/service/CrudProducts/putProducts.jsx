

function putProducts(elemento) {


    async function putModificarProducto(elemento) {
        //En caso de que el input venga vacio, salta un mensaje alert, si no, hace el cambio basandose en los elementos del array.
       
        try {
            console.log("puttt f");
            const response = await fetch('http://localhost:3005/products/'+ elemento[0], {

              method: 'PUT',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({

                hardwareExterno: [
                    {
                      PerifericosEntrada: [
                        {
                            CoP: elemento[1] ,
                            price: elemento[2],
                            stockTotal: elemento[3],
                            brand: elemento[4],
                            date: elemento[5],
                            img: elemento[6],
                            hardwareType: elemento[7],
                            PerifericType: elemento[8],
                        }
                      ],
                    },
                ]

              })
            });
            
        }catch(error) {
            alert("error");
        }
       
      }

      putModificarProducto(elemento)

}

export default putProducts
