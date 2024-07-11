
//Mapa extraido de gogle maps.
function Mapa() {
    let coord = {lat: -84.759618,lng: -84.7570431}
    let map = new google.maps.Maps(document.querySelector("mapa"),{
        zoom: 10,
        center: coord
    })

    let marker = new google.maps.Marker({
        position: coord,
        map: map
    });

  return (
    <div className="mapa"></div>
  )
}

export default Mapa