
function CrudProducts({ metodo }) {

  
    async function GetProduct() {
        try {
            const response = await fetch('http://localhost:3005/products');
            const data = await response.json();
            return data;
            
          } catch (error) {
            alert("Error");
          }
    }
}

export default CrudProducts