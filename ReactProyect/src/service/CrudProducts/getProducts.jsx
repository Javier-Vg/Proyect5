
async function getProducts(id, hardware) {
 
        try {
        const response = await fetch(`http://localhost:3000/${hardware}/${id}`);
        const data = await response.json();
        return data;
            
        } catch (error) {
            alert("Error");
        }
}

export default getProducts