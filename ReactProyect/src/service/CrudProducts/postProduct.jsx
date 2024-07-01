
function PostProduct( product , hardware) {
  console.log(hardware);

    async function Post( product , hardware) {

      if (hardware == "interno") {
        try {
            const response = await fetch('http://localhost:3005/products', {
      
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({

                hardwareInterno: (product)

              })
            });
            
        }catch(error) {
          console.log(error);
        }

      }else if(hardware == "externo"){

        try {
          const response = await fetch('http://localhost:3005/products', {
    
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({

              hardwareExterno: (product)

            })
          });
          
        }catch(error) {
            console.log(error);
        }
      }
    }

    Post(product, hardware)
}

export default PostProduct