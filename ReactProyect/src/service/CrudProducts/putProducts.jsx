
function putProducts(id, elemento, hardware) {
  
  let hard = hardware;
    async function putModificarProducto(id, product, hard) {
      
        //En caso de que el input venga vacio, salta un mensaje alert, si no, hace el cambio basandose en los elementos del array.
        try {
            const response = await fetch(`http://localhost:3005/${hard}/${id}`, {

              method: 'PUT',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(product)
            });
            
        }catch(error) {
            alert("error");
        }
    }

    putModificarProducto(id, elemento, hard)

}

export default putProducts
