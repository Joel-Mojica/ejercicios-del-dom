let w = window;
let d = document;
export function detectarConexion(selector) {

    w.addEventListener("offline",(e) =>{
        d.querySelector(selector).innerHTML = `<h2 class="conexOf">Conexion Perdida</h2>`;
            setTimeout(() => {
               d.querySelector(selector).innerHTML = " "; 
            }, 2000);
    });

    w.addEventListener("online",(e) =>{
        d.querySelector(selector).innerHTML = `<h2 class="conexIn">Conexion Restablecida</h2>`;
            setTimeout(() => {
                d.querySelector(selector).innerHTML = " ";
            }, 2000);
     });
}