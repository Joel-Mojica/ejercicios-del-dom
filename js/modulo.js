//console.log("ESte es un modulo llamado desde tora parte");

/*
function validatePassword(pass) {
    function validarLongitudCadena (pass){
    if(pass.length > 6 && pass.length < 24){
        return 1;
    }else{
        alert("le fatan caracteres");
        return 0;
        
    }
}


     var numeros="0123456789";

    function tiene_numeros(pass){
        for(i=0; i<pass.length; i++){
            if (numeros.indexOf(pass.charAt(i),0)!=-1){
                return 1;
            }
        }
         return 0;
    }


    var letras="abcdefghyjklmnñopqrstuvwxyz";

    function tiene_minusculas(pass){
        for(i=0; i<pass.length; i++){
            if (letras.indexOf(pass.charAt(i),0)!=-1){
                return 1;
            }
        }
            return 0;
    }


    var letras_mayusculas="ABCDEFGHYJKLMNÑOPQRSTUVWXYZ";

    function tiene_mayusculas(pass){
        for(i=0; i<pass.length; i++){
            if (letras_mayusculas.indexOf(pass.charAt(i),0)!=-1){
                return 1;
        }
     }
        return 0;
    }

        if(tiene_minusculas(pass) == 1 && tiene_mayusculas(pass) == 1 && tiene_numeros(pass) == 1 && validarLongitudCadena(pass) == 1){
            alert("exelente tiene mayuscula, minuscula, numeros y cumple con la cantidad de caracteres");
        }else{
            alert("no cumple con las siguientes condiciones, mayusculas y minusculas, almenos una letra y ser mayor de 6 caracterees y menor de 26");
        }
    
   
}

validatePassword("Joelantoni0");
*/



/*
1) Programa una función que cuente el número de caracteres de una cadena de texto,
 pe. miFuncion("Hola Mundo") devolverá 10.
2) Programa una función que te devuelva el texto recortado según el número
 de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
3) Programa una función que dada una String te devuelva un Array de textos separados
por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
4) Programa una función que repita un texto X veces, 
pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
*/

/*
function contaString(text) {
    console.log (text.length);
}

contaString("joel");
*/

/*
function cortaString(text, corte) {
  
  return  text.substring(0,corte);

}
   let textoCortado =  cortaString("hola joel",6);
   console.log(textoCortado)
   */

   /*
function arrayString(texto, separador){
    return texto.split(separador);
}

 let arregloFuncion = arrayString("hola que tal",' ');
console.log(arregloFuncion)
*/


/*
function repetidor(text,veces) {
    for (let i = 0; i < veces; i++) {
        console.log(text);
    }
}

repetidor("hola mundo", 1000)
*/

/*
5) Programa una función que invierta las palabras de una cadena de texto, 
pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, 
pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
7) Programa una función que valide si una palabra o frase dada, es un palíndromo
 (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
8) Programa una función que elimine cierto patrón de caracteres de un texto dado,
 pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
*/

/*
let invertir = function invertirFunc(texto = "") {
    if(!texto){
        return console.warn("debes ingresar un texto");
    }

    let array = [];
    for (let i = 0; i < texto.length; i++) { 
        array.push(texto[i]);
    }

    array.reverse();
    return array.join();
}

console.log(invertir("hola mundo"));

*/


/*
function palimdromo(texto=""){
    
    if(!texto){
        return console.warn("debes introducir un texto")
    }

    texto.toLowerCase()
    let tex = texto.split("").reverse().join("")

    if(texto !== tex){
        return false
    }
   
    
    if(texto === tex){
        return true
    }
   
}

console.log(palimdromo("sAlA"))
*/


/*
function palabraRepetida(texto = "", buscar = ""){

    if(!texto){
        return console.warn("Debes ingresar un texto")
    }

    if(!buscar){
        return console.warn("Debes ingresar la palabra que buscaras")
    }

    let i = 0
    let contador = 0

    while(i !== -1){
        i =  texto.indexOf(buscar,i)
        if(i !== -1){
            i++
            contador++
        }
        contador
    }

    return console.log(`La palabra ${buscar} se repite ${contador} veces`)
}

palabraRepetida("hola mundo adios mundo", "mundo");
*/


/*
9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
10) Programa una función que reciba un número y evalúe si es capicúa o no
 (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
11) Programa una función que calcule el factorial de un número 
(El factorial de un entero positivo n, se define como el producto de todos los
     números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
*/


/*
function aleatorio(){
    console.log(Math.floor(Math.random()*100)+500)
}
    aleatorio()
*/



/*
function capicua(num = 0){

    if(!num){
        return console.warn("Debes ingresar un numero")
    }

    let numC = num.toString();
    let numInverti = numC.split("").reverse().join("");

    if(num === numInverti){
        return console.log(`El numero ${num} es capicua porque es igual al reves que: ${numInverti}`)
    }else{
        return console.warn("El numero no es capicua")
    }
}

capicua(2002)
*/



/*
function factorial(num = 0){
    if(!num){
        return console.warn("debes ingresar un numero")
    }
    
    if(typeof(num) !== "number"){
        return console.warn("no se permiten cadenas de texto")
    }

    let numx = 1
    for (let i = 1; i < num+1; i++) {
        numx *= i
    }
    return console.log(numx)
}

factorial(5)
*/

/*
    12) Programa una función que determine si un número es primo
     (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
*/

/*
let parImpar =(num = 0)=> {
    if(typeof(num) !== "number"){
       return console.warn("No se permiten cadena de texto, favor ingresar valor numerico")
    }

    if(num%2 === 0){
        return console.log("El numero: "+num+" es par")
    }else{
        return console.error("El numero: "+num+" no es par")
    }
}

parImpar(55)
*/


/*
function convertidorFarhCelci(temp = 0,grado ="") { 

    if(typeof(temp) !== "number"){
        return console.warn("No se permiten cadena de texto, favor ingresar valor numerico")
     }

     if(grado.toUpperCase() == "F"){
         let C = ((temp * 1,8) + 32);
        return console.log(`${C} Fahrenheight`)
     }

     if(grado.toUpperCase() == "C"){
         let F = ((temp - 32) / 1.8);
         return console.log(`${F} Celsius`)
     }

 }

 convertidorFarhCelci(10,"C")
 */


 /*
 15) Programa una función para convertir números de base binaria a
  decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
 16) Programa una función que devuelva el monto final después de aplicar un
  descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
 17) Programa una función que dada una fecha válida determine cuantos años 
 han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
 */


 /*
 function diaDHoy(fecha){
    

    let actual = new Date(2021,3,19).getFullYear();
    return console.log(actual - fecha + " años")
 }

 diaDHoy( new Date(1994,3,14).getFullYear())

*/

/*
18) Programa una función que dada una cadena de texto cuente el número de 
vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
19) Programa una función que valide que un texto sea un nombre válido, 
pe. miFuncion("Jonathan MirCha") devolverá verdadero.
20) Programa una función que valide que un texto sea un email válido, 
pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.

*/



/*
function cuentaVocales(texto = ""){

    if(!texto){
        return console.warn("Debes ingresar un texto")
    }

    let vocal = 0
    let constante = 0

    const arrayVocal =["A","E","I","O","U"]
    const arrayConstante=["B","C","D","F","G","H","J","K","L","M","N","Ñ","P","Q","R","S","T","V","W","X","Y","Z"]

function vocales(texto,arrayVocal) {  
    for (let i = 0; i < texto.length; i++) {
        for (let j = 0; j < arrayVocal.length; j++) {
            if(texto[i] == arrayVocal[j]){
                vocal++
            }   
        }  
    }
    return console.log(vocal + " Vocales")
}

function constantes(texto,arrayConstante) {
    for (let i = 0; i < texto.length; i++) {
        for (let j = 0; j < arrayConstante.length; j++) {
            if(texto[i] == arrayConstante[j]){
                constante++
            }   
        }  
    }
    return console.log(constante+ " Constantes")
}


    vocales(texto,arrayVocal)
    constantes(texto,arrayConstante)
}

cuentaVocales("Hola Mundo".toUpperCase())
*/

/*
function validEmail(text = ""){
    const buscar = "@gmail.com"
    let i = 0
    let siEsta = false

    while(i !== -1){
        i = text.indexOf(buscar,i);
        if(i !== -1){
            i++
            siEsta = true;
        }
    }

    return console.log(siEsta)
}

validEmail("el_joe03@gmail.com")
*/


/*
21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado,
 pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
22) Programa una función que dado un array devuelva el número mas alto y
 el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
23) Programa una función que dado un array de números devuelva un objeto
 con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

*/

/*
function alCuadrado(entrada) {
    let retornoElevado =[]
    entrada.forEach(element => { 
        retornoElevado.push(element*element)
    });
    return console.log(retornoElevado)
}

let array = [1,4,5]
alCuadrado(array)
*/

/*

function mayorMenor(num) {
    let menor = 0
    let mayor = 0

    mayor = Math.max.apply(null,num)
    menor = Math.min.apply(null,num)

    console.log(mayor)
    console.log(menor)
}

mayorMenor([1, 4, 5, 99,-605,1,2,3,4,545,6,7,548,9224])
*/


/*
function ParEImapar(numArray) {
    let par = []
    let impar = []

    numArray.forEach(element => {
        if(element%2 === 0){
            par.push(element)
        }else{
            impar.push(element)
        }
    });


   let objPar = {
        par,
        impar
    }

    console.log(objPar)

}
ParEImapar([1,2,3,4,5,6,7,8,9,0])
*/