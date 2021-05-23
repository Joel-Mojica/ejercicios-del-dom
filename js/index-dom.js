//Modulos importados
import { botonScroll } from "./boton-scroll.js";
import { temporizador } from "./cuenta-regresiva.js";
import { detectarConexion } from "./detectar-conexion.js";
import filtroBusqueda from "./filtro_busqueda.js";
import { getGeolocation } from "./geolocalizacion.js";
import menuHamburgesa from "./menuHamburgesa.js";
import { modoOscuro } from "./modo-oscuro.js";
import { moverTecla } from "./moverPorTecla.js";
import { provadorResponsive } from "./provador-responsive.js";
import { alarma, reloj } from "./reloj.js";
import { responsiveVideoMapa } from "./responsive-videoMapa.js";
import { scrollSpy } from "./scroll-spy.js";
import { slider } from "./slider-carrusel.js";
import { sorteoElectronico } from "./sorteo-electronico.js";
import { videoCamara } from "./video-camara.js";

//evento para ejecutar script despues que cargue el html
document.addEventListener("DOMContentLoaded", (e) => {
  //boto para desplegar menu izquierdo
  menuHamburgesa();
  botonScroll(".btn-scroll");

  //funciones de las secciones menu izquierdo
  reloj(".iR", ".dR", ".reloj");
  alarma(".iA", ".dA", ".alarma");
  moverTecla(".panel", ".punto");
  temporizador(
    ".tempor",
    "May 5 2022 6:30:10 pm",
    "Felicidades Joel Mojica, hoy celebramos tu cumple tarde pero seguro"
  );

  //metodo para video, puedo llamar mas de una vez el mismo metodo haciendolo reutilizable
  responsiveVideoMapa(
    ".videoYouT",
    "(min-width: 800px)",
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/16geDhp5Xmg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    `<a href="https://www.youtube.com/watch?v=16geDhp5Xmg&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=92" target="_blank">Video</a>`
  );
  //metodo para el mapa, es el mismo que el del video con entradas diferentes para madificar contenido.
  responsiveVideoMapa(
    ".mapaGoog",
    "(min-width: 800px)",
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60545.540738765565!2d-69.96662363328525!3d18.479296835651937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf89f1107ea5ab%3A0xd6c587b82715c164!2sSanto%20Domingo!5e0!3m2!1ses-419!2sdo!4v1620588515806!5m2!1ses-419!2sdo" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`,
    `<a href="https://www.google.com/maps/@18.4835006,-69.9320271,14z?hl=es-419" target="_blank">Mapa</a>`
  );

  provadorResponsive(".provador-responsive");
  detectarConexion(".deteConexion");
  videoCamara(".videoCam");
  getGeolocation(".geolocation");
  filtroBusqueda(".buscar", ".card");
  sorteoElectronico(".elem", ".ganador");
  slider();
  scrollSpy();
});
//saque este modulo por que dentro de la funcion ya tengo un DOMCoundedLoaded para tomar desicion del tema despues que todo cargue
modoOscuro(".body", ".titulopag", ".seccion-pantalla", ".btn-oscuro");
