

function CrudForm() {

  return (
    <div className="crudForm">
        <h2>Añade el producto</h2>
        <form >
            <div>
                <label >Nombre del producto</label>
                <br/>
                <input type="text" required/>
                <br />
            </div>
            <div>
                <label >Precio del producto</label>
                <br/>
                <input type="text" required/>
                <br />
            </div>
            <div>
                <label >Stock del producto</label>
                <br/>
                <input type="text" required/>
                <br />
            </div>
            <div>
                <label >Fecha de iniciado de venta</label>
                <br/>
                <input type="date" required/>
                <br />
            </div>
            <div>
                <label >Imagen del producto</label>
                <br/>
                <input type="file" required/>
                <br />
            </div>
            <br />
            <button>Registrar Producto</button>
        </form>
    </div>

  )
}

export default CrudForm;