let d = document;

export function temporizador(tempo,fecha,mensaje) {
   let limite = new Date(fecha).getTime();

    let cuentaAtras = setInterval(() => {
        let hoy = new Date().getTime();
        let diaLimite = limite - hoy;

        let dias = Math.floor(diaLimite / (1000*60*60*24)),
        horas = Math.floor(diaLimite % (1000*60*60*24) / (1000*60*60)),
        minutos = Math.floor(diaLimite % (1000*60*60) / (1000*60)),
        segundos = Math.floor((diaLimite % (1000*60)) / 1000);

        d.querySelector(tempo).innerHTML = `<h5>Faltan: ${dias} dias, ${horas} horas, ${minutos} minutos y ${segundos} segundos.</h5>`;

        if(dias < 0){
            clearInterval(cuentaAtras);
            d.querySelector(tempo).innerHTML = `<h5>${mensaje}</h5>`;
        }
    }, 1000);
    
}