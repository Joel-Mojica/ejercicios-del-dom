console.log(document.querySelector(".link-dom").href);
console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"))


$card = document.querySelector(".card");


console.log($card.classList.contains("rotate-45"));
console.log($card)



const $eventoMultiple = document.getElementById("evento-multiple");

$eventoMultiple.addEventListener("click",(e)=>{
    alert("hola mundo manejador de eventos multipels");
    console.log(e);
    
    const $p = document.createElement("p")
    const frase = "hola como estas"
    $p.textContent = frase ;
    document.body.appendChild($p)
    $p.style.setProperty("Color","Red")
    $p.style.setProperty("font-size","30px")

    setTimeout(function()
    { document.body.removeChild($p); }
    , 3000);
    
})