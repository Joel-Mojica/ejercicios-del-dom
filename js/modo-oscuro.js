let d = document;

export function modoOscuro(bodyHtml,titulo,seccionPantalla,btnOscuro) {
    let $boton = d.querySelector(btnOscuro);
    let luna = "🌙",
        sol = "☀️";

    //fuciones
    let volverOscuro = function() {
            d.querySelector(bodyHtml).classList.add("modoOscuro");
            d.querySelector(titulo).classList.add("titulo");
            d.querySelector(seccionPantalla).classList.add("seccionLi");
            d.querySelector(btnOscuro).classList.add("btnLeft");

        $boton.textContent = sol; 
        //para guardar en el almacaenamiento local del navegador se usa localstoragen setItem(nombre y valor)
        localStorage.setItem("tema","luna");
    }

    let volverClaro = function() {
        d.querySelector(bodyHtml).classList.remove("modoOscuro");
        d.querySelector(titulo).classList.remove("titulo");
        d.querySelector(seccionPantalla).classList.remove("seccionLi");
        d.querySelector(btnOscuro).classList.remove("btnLeft");

        $boton.textContent = luna; 
        //para guardar en el almacaenamiento local del navegador se usa localstoragen setItem(nombre y valor)
        localStorage.setItem("tema","sol"); 
    }
   
    //eventos 
    d.addEventListener("click",(e)=>{
      if(e.target.matches(btnOscuro)){
            if($boton.textContent === luna){
                volverOscuro(); 
            }else if($boton.textContent === sol){
                volverClaro(); 
            }
        }
    });

   //aqui evaluo el localstorage que guarde despues que todo el dom cargue para recordar lo que el usuario tomo y aplicarlo cuando recargue la pagina
d.addEventListener("DOMContentLoaded",(e)=>{
        if(localStorage.getItem("teme") == "null"){
            localStorage.setItem("tema","sol");
        }
        if(localStorage.getItem("tema") == "sol"){
            volverClaro();
        }
        if(localStorage.getItem("tema") == "luna"){ 
            volverOscuro();
        }
});




    
}