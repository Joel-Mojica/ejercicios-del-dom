let d = document;

export function scrollSpy() {
  let $secciones = d.querySelectorAll(".seccion-pantalla a[data-scroll-spy]");

  console.log($secciones);

  let cb = (entrada) => {
    entrada.forEach((entry) => {});
  };

  const vista = new IntersectionObserver(cb, {});

  $secciones.forEach((el) => {
    vista.observe(el);
  });
}
