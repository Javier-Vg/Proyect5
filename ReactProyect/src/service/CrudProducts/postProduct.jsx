import Swal from "sweetalert2";

async function PostProduct( product , hardware) {

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
        Swal.fire({
            icon: "success",
            title: "Agregado con exito"
        })
}

export default PostProduct