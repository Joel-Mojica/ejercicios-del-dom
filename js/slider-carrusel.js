let d = document;

export function slider() {
  let $prevbtn = d.querySelector(".prev"),
    $nextbtn = d.querySelector(".next"),
    $slides = d.querySelector(".slider-slides");

  let i = 0;
  //boton previo
  d.addEventListener("click", (e) => {
    if (e.target === $prevbtn) {
      //evito comportamiento por defecto para que el enlace falso no me manda arriba de la pagina
      e.preventDefault();
      //quito el active que muestra el foco y disminuyo el iteractivo i en --1
      $slides.children[i].classList.remove("active");
      i--;
      //para que la lista se coloque en el ultimo cuando sea menos sero, uso esta condisional
      if (i < 0) {
        i = $slides.children.length - 1;
      }
      //cada que se da clic el iterador cambia y por ende el active
      $slides.children[i].classList.add("active");
    }

    //boton siguiente
    if (e.target === $nextbtn) {
      //evito comportamiento por defecto para que el enlace falso no me manda arriba de la pagina
      e.preventDefault();
      //quito el active que muestra el foco y incremento el iteractivo i en --1
      $slides.children[i].classList.remove("active");
      i++;
      //para que la lista se coloque en el ultimo cuando sea menos sero, uso esta condisional
      if (i >= $slides.children.length) {
        i = 0;
      }
      //cada que se da clic el iterador cambia y por ende el active
      $slides.children[i].classList.add("active");
    }
  });
}
