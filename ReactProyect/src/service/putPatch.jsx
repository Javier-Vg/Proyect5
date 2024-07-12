

function PutPatch(id, elemento, endPoint) {
  
      async function putModificah(id, product, point) {
        
          //En caso de que el input venga vacio, salta un mensaje alert, si no, hace el cambio basandose en los elementos del array.
          try {
              const response = await fetch(`http://localhost:3005/${point}/${id}`, {
  
                method: 'PATCH',//Modifica solo un objeto 
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(product)
              });
              
          }catch(error) {
              alert("error");
          }
        }
  
      putModificah(id, elemento, endPoint)
  
  }
  
  export default PutPatch
  