

function deleteProductsExtern() {
    async function DeleteProduct(id) {

        //let idString = event.currentTarget.getAttribute("id")

        try {
        console.log("try");
        const response = await fetch('http://localhost:3005/hardwareExterno/'+id, {
          method: 'DELETE',
        });
        
        }catch(error) {
            alert("error en delete");
        
        }
    }
    console.log("Borro, o no?");

    DeleteProduct(event)
}

export default deleteProductsExtern