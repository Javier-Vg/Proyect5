
async function getUser() {

    try {
      const response = await fetch('http://localhost:3001/users');
      const data = await response.json();
      
      return data;
      
    } catch (error) {
      alert("Error");
    }
}

export { getUser}