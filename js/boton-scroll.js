let d = document;

export function botonScroll(botScrol) {
    
let $botonscro = d.querySelector(botScrol);

d.addEventListener("scroll",(e)=>{

    if(scrollY > 600){
        $botonscro.style.visibility = "visible";
        $botonscro.style.transform = "translate(-60px)";
        $botonscro.style.opacity = "1";
    }else{
        $botonscro.style.visibility = "hidden";
        $botonscro.style.transform = "translate(0px)";
        $botonscro.style.opacity = "0";
    }

})
}