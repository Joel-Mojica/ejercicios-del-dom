let $d = document;

export function reloj(iR,dR,reloj) { 
  let relojTemp;
    $d.addEventListener("click",(e)=>{
        if(e.target.matches(iR)){
            relojTemp = setInterval(() => {
                //se declara la hora dentro del intervalo pra que los segundos y todo se actualize en cada intervalo, de otra forma se imprimiria y no cambiaria
                let hora = new Date();
                let horaLocal = hora.toLocaleTimeString();
                $d.querySelector(reloj).innerHTML = "<h3>"+ horaLocal +"</h3>";
                console.log(reloj)
            }, 1000);
          e.target.disabled = true;
        }

        if(e.target.matches(dR)){
            $d.querySelector(reloj).innerHTML = null;
            clearInterval(relojTemp);
            $d.querySelector(iR).disabled = false;
        }
    });
  }

  export function alarma(iA,dA,alarma) {
      $d.addEventListener("click",(e)=>{
        if(e.target.matches(iA)){
            $d.querySelector(alarma).innerHTML = `<audio type="audio/mp3" src="assets/audio/car-alarm.mp3" autoplay></audio>`;
            e.target.disabled = true;
        }

        if(e.target.matches(dA)){
            $d.querySelector(alarma).innerHTML = null;
            $d.querySelector(iA).disabled = false;
        }
      });
  }