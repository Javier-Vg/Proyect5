function putStock(id, elemento, hardware) {
  
    let hard = hardware;
      async function putModificarStock(id, stock, hard) {
        
          //En caso de que el input venga vacio, salta un mensaje alert, si no, hace el cambio basandose en los elementos del array.
          try {
              const response = await fetch(`http://localhost:3005/${hard}/${id}`, {
  
                method: 'put',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    stockTotal: {stock}
                })
              });
              
          }catch(error) {
              alert("error");
          }
      }
  
      putModificarStock(id, elemento, hard)
  
  }
  
  export default putStock
  