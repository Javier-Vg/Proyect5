

function deleteProducts(id, hardware) {

    async function DeleteProduct(id, hardware) {

        //let idString = event.currentTarget.getAttribute("id")

        try {
            console.log("try");
            const response = await fetch(`http://localhost:3000/${hardware}/${id}`, {
            method: 'DELETE',
        });
        
        }catch(error) {
            console.log("error en delete");
        }
    }

    DeleteProduct(id, hardware)
}

export default deleteProducts