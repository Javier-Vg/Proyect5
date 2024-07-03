

function deleteProductsIntern(event) {

    async function DeleteProduct(id) {

        //let idString = event.currentTarget.getAttribute("id")

        try {
        console.log("try");
        const response = await fetch('http://localhost:3005/hardwareInterno/'+id, {
          method: 'DELETE',
        });
        
        }catch(error) {
            console.log(error)
        
        }
    }

    DeleteProduct(event)
}

export default deleteProductsIntern