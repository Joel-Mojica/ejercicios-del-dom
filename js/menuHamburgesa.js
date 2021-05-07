let $d = document;
export default function menuHamb() {  

let $leftNav = $d.querySelector(".left-nav");
let $linkSeccion = $d.querySelector(".seccion");
let $botonAmburguesa = $d.querySelector(".botonAm");

  $botonAmburguesa.addEventListener("click",function(){
    $leftNav.classList.toggle("activo"); 
  });

  $linkSeccion.addEventListener("click",function(){ 
    $leftNav.classList.toggle("activo"); 
  });
}

