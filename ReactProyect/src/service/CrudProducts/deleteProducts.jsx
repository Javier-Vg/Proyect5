

function deleteProducts(event) {

    async function DeleteProduct(id) {

        //let idString = event.currentTarget.getAttribute("id")

        try {
        console.log("try");
        const response = await fetch('http://localhost:3005/products/'+id, {
          method: 'DELETE',
        });
        
        }catch(error) {
            alert("error en delete");
        
        }
    }


    DeleteProduct(event)
}

export default deleteProducts