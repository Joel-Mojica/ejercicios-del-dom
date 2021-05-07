import { botonScroll } from "./boton-scroll.js";
import { temporizador } from "./cuenta-regresiva.js";
import menuHamburgesa from "./menuHamburgesa.js";
import { modoOscuro } from "./modo-oscuro.js";
import { moverTecla } from "./moverPorTecla.js";
import { alarma, reloj } from "./reloj.js";

let d = document;
//evento para ejecutar script despues que cargue el html
d.addEventListener("DOMContentLoaded",(e)=>{
    
    //boto para desplegar menu izquierdo
    menuHamburgesa();
    botonScroll(".btn-scroll");

    //funciones de las secciones menu izquierdo
    reloj(".iR",".dR",".reloj");
    alarma(".iA",".dA",".alarma");
    moverTecla(".panel",".punto");
    temporizador(".tempor","May 5 2022 6:30:10 pm","Felicidades Joel Mojica, hoy celebramos tu cumple tarde pero seguro");
    modoOscuro(".body",".titulopag",".seccion-pantalla",".btn-oscuro");

});