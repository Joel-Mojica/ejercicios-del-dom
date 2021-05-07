let $d = document;
export function moverTecla(panel,punto) {

//parametros translation en coordenadas x,y
let X = 0;
let Y = 0;

$d.addEventListener("keydown",(e)=>{  
 
 //getBoundingClientRect(); me permite identificar los limites cuando un objeto coaliciona con otro
 let posicionPunto = $d.querySelector(punto).getBoundingClientRect();
 let tamañoPanel = $d.querySelector(panel).getBoundingClientRect();

    //arriba
    if(e.keyCode == 38){
        if(posicionPunto.top > tamañoPanel.top){
            Y--; 
        }
        //preventDefault() me permite evitar que el scroll se mueva cuando interactue con el punto y desavilita todos los eventos default del teclado
        e.preventDefault();
    }
    //izquierda
    if(e.keyCode == 37){
        if(posicionPunto.left > tamañoPanel.left){
            X--;
        }
        e.preventDefault();
    }
    //derecha
    if(e.keyCode == 39){
        if(posicionPunto.right < tamañoPanel.right){
           X++; 
        }
        e.preventDefault();
    }
    //abajo
    if(e.keyCode == 40){
        if(posicionPunto.bottom <   tamañoPanel.bottom){
            Y++;
        }
        e.preventDefault();
    }
    $d.querySelector(punto).style.transform = `translate(${X*10}%, ${Y*10}%)`;
});

}