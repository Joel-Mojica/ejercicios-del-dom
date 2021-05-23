let d = document,
  n = navigator;

export function getGeolocation(geolocat) {
  let $geoloc = d.querySelector(geolocat);

  //este objeto tendra la configuracon la presicion, el tiempo de busqueda y una regla para que no se reescriba o no se almacene los datos
  let options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  //en caso de exito, tomo los datos que trae el objeto como las cordenadas y las muestro con inner html
  let success = (succes) => {
    let long = succes.coords.longitude;
    let lati = succes.coords.latitude;
    let presicion = succes.coords.accuracy;

    $geoloc.innerHTML = `<div>
        <p>Presicion: ${presicion} metros</p>
        <p>Latitud: ${lati}</p>
        <p>Longitud: ${long}</p>
        <a href="https://www.google.com.do/maps/@${lati},${long}">Ver tu ubicacion en google</a>
        </div>
        `;
  };

  //caso de error, muestro error
  let error = (err) => {
    $geoloc.innerHTML = err;
  };

  //El metodo getCurrenPosition exige 3 argumentos, success en caso de exito, error y las opciones que se le dan, las 3 opciones estan declaradas arribas y se llaman aca.
  n.geolocation.getCurrentPosition(success, error, options);
}
