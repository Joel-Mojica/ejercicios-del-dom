let d = document;

export function provadorResponsive(provadorForm) {
    let $form = d.querySelector(provadorForm);
    let ventana;

    d.addEventListener("submit",(e)=>{
      e.preventDefault();
      
        if(e.target === $form){
            ventana = window.open($form.direccion.value,"provando",`innerHeight=${$form.altura.value}, innerWidth=${$form.anchura.value} `);
        }

        d.addEventListener("click",(e)=>{
            if(e.target == $form.cerrar){
                ventana.close();
            }
        });
    });
}