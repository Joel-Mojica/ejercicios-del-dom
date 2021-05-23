let d = document;

export default function filtroBusqueda(input, filtro) {
  //defino un evento para cuando el ususario deje de escribir
  d.addEventListener("keyup", (e) => {
    //si el target que origina el evento es input entoces ejecutara lo siguiente
    // console.log(e.target.value); confirme vi en consola que el valor se esta filtrando
    if (e.target.matches(input)) {
      if (e.key === "Escape") {
        e.target.value = "";
      }
      //selecciono todos los clases para buscar el textContent dentro y filtrar
      d.querySelectorAll(filtro).forEach((el) => {
        //pregunto si el textConten del elemento incluye el texto que buscamos, si es cierto no aplica la clase filtro (que borra display: none) y si no lo tiene aplico la clase para que oculte todo lo que no coincida
        if (el.textContent.toLowerCase().includes(e.target.value)) {
          el.classList.remove("filtro");
          //para que se vea la transicion
          setTimeout(() => {
            el.classList.remove("d-none");
          }, 500);
        } else {
          el.classList.add("filtro");
          //para que se vea la transicion
          setTimeout(() => {
            el.classList.add("d-none");
          }, 500);
        }
      });
    }
  });
}
