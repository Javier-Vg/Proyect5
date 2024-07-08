import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import teclado from "../assets/img/teclado.png"

function CarouselElementos() {

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 4 },
    };
    
    const items = [
        <div className="item" >
            <img style={{backgroundColor: "grid" ,height: "300px", width:"350px"}} src="https://atekcr.com/cdn/shop/files/g502-lightspeed-gallery-1_692x519.webp?v=1685570538" alt="mouse" />
            
        </div>
        ,
        <div className="item" >
        <   img style={{backgroundColor: "grid" ,height: "380px", width:"350px"}} src={teclado} alt="teclado" />
        </div>,
        <div className="item" >
            <img style={{backgroundColor: "grid" ,height: "320px", width:"320px"}} src="https://gamefactor.mx/images/galeria_articulos/MCG700-02.png" alt="microfono" />
        </div>,
        <div className="item" >
            <img style={{backgroundColor: "grid" ,height: "350px", width:"350px"}} src="https://static.vecteezy.com/system/resources/previews/027/124/784/original/webcam-gaming-3d-illustration-png.png" alt="camara" />
        </div>,
        <div className="item" >
            <img style={{backgroundColor: "grid" ,height: "330px", width:"330px"}} src="https://tecnosivar.com/wp-content/uploads/2021/01/XB3_XB273U-NX_Standard_01.png" alt="monitor" />
        </div>,
        <div className="item" >
            <img style={{backgroundColor: "grid" ,height: "330px", width:"350px"}} src="https://levelupworld.com/assets/img/dt/gabinetes/andromeda/andromeda.png" alt="gabinete" />
        </div>,
        <div className="item" >
            <img style={{backgroundColor: "grid" ,height: "350px", width:"380px"}} src="https://es.marsgaming.eu/uploads/_thumnails/mpii850-iso_640x480.png" alt="fuenteAlimentacion" />
        </div>,
        <div className="item" >
            <img style={{backgroundColor: "grid" ,height: "350px", width:"350px"}} src="https://www.marsgaming.eu/uploads/_thumnails/mh4v2_960x960.png" alt="audio" />
        </div>,  
        <div className="item" >
            <img style={{backgroundColor: "grid" ,height: "390px", width:"350px"}} src="https://static.xtralife.com/conversions/EWJC-QZM312482-medium_w640_h480_q75-12482-original-portada22260-1541697021.webp" alt="mando" />
        </div>, 
        <div className="item" >
            <img style={{backgroundColor: "grid" ,height: "350px", width:"350px"}} src="https://www.paris.cl/on/demandware.static/-/Sites-paris-marketplace/default/dwf2d4ef47/images/imagenes-productos/800/MKT9/MKT9ZPZDKH-0400-001.png" alt="silla" />
        </div> 
    ];
    
    return(
        <div className='divCarusel'>
            <AliceCarousel
            mouseTracking
            items={items}
            
            responsive={responsive}
            controlsStrategy="alternate"
            />
        </div>
        
    )
}

export default CarouselElementos