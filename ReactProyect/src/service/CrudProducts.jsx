
function CrudProducts() {

    async function GetProduct() {
        try {
            const response = await fetch('http://localhost:3005/products');
            const data = await response.json();
            return data;
            
          } catch (error) {
            alert("Error");
          }
    }

    async function PostProduct( product ) {

        try {
            const response = await fetch('http://localhost:3005/products', {
      
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(product)
            });
            response
        }catch(error) {
          console.log(error);
        }
    }

    async function PutProduct(producto) {

        if ((producto[1]).trim() != "" ) {

            try {
              const response = await fetch('http://localhost:3005/products/'+ producto[0], {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  task: producto[1]
                })
              });
              
            }catch(error) {
              alert("error");
            }
            
          }else{
            alert("Tiene que escribir en la barra de texto para editar su tarea...");
            
          }
    }

    async function DeleteProduct(event) {

        let idString = event.currentTarget.getAttribute("id");

        try {
        console.log("try");
        const response = await fetch('http://localhost:3005/products/'+idString, {
          method: 'DELETE',
        });
        window.location.reload();
        
        }catch(error) {
            alert("error");
        
        }
    }

  return (
    <div>CrudProducts</div>
  )
}

export default CrudProducts