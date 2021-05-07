let d = document;

export function modoOscuro(bodyHtml,titulo,seccionPantalla,btnOscuro) {
    let $boton = d.querySelector(btnOscuro);

    d.addEventListener("click",(e)=>{
        if(e.target.matches(btnOscuro)){
            d.querySelector(bodyHtml).classList.toggle("modoOscuro");
            d.querySelector(titulo).classList.toggle("titulo");
            d.querySelector(seccionPantalla).classList.toggle("seccionLi");
            d.querySelector(btnOscuro).classList.toggle("btnLeft");

           // $boton.innerHTML = "🌙";
        }
    });
}