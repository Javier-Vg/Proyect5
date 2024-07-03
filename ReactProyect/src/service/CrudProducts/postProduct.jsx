
function PostProduct( product , hardware) {
  console.log(hardware);

    async function Post( product , hardware) {

      if (hardware == "hardwareInterno") {
        try {
            const response = await fetch('http://localhost:3005/hardwareInterno', {
      
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify((product)
              )
            });
            
        }catch(error) {
          console.log(error);
        }

      }else if(hardware == "hardwareExterno"){

        try {
          const response = await fetch('http://localhost:3005/hardwareExterno', {
    
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify((product))
          });
          
        }catch(error) {
            console.log(error);
        }
      }
    }

    Post(product, hardware)
}

export default PostProduct