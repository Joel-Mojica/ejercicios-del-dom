let d = document;
export function responsiveVideoMapa(clase,mediaQ,escritorio,mobil) {
//este disparador indicara cuando aplicar la media query que es cuando llegue a un width de 800
let disparador = window.matchMedia(mediaQ);
    //este metodo espera un true o false para ejecutarse el true o false se mandara con el addListener
    let responsive = (e) => {
        if (e.matches) {
            d.querySelector(clase).innerHTML = escritorio;
        } else {
            d.querySelector(clase).innerHTML = mobil;
        }
    }
  //añado al disparador un addListened que medira el with y activara el true o false con el metodo responsive al pasarlo al listener
  disparador.addListener(responsive);
  //llamo la funcion para que se ejecute desde que carge la pagina, nota: sino lo llamo tendre que cambiar el tamaño de la pantalla para ver el funcioamiento
  responsive(disparador);

}