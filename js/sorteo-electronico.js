let d = document;

export function sorteoElectronico(elementos, btnGanador) {
  let consursantes = new Array();
  d.querySelectorAll(elementos).forEach((el) => {
    consursantes.push(el);
  });

  d.addEventListener("click", (e) => {
    if (e.target.matches(btnGanador)) {
      let numero = Math.floor(Math.random() * consursantes.length);
      let ganador = consursantes[numero].textContent;
      console.log("El ganador es: " + ganador);
      alert("El ganador es: " + ganador);
    }
  });
}
