
function PostProduct( product , hardware) {
  console.log(hardware);

    async function Post( product , hardware) {
        try {
            const response = await fetch(`http://localhost:3005/${hardware}`, {
      
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

    }

    Post(product, hardware)
}

export default PostProduct