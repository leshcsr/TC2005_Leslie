
/* Actualmente es mas usado utilizar LET para declarar variables */ 
var desayuno = "hotcakes";
let comida = "alitas";

/* const es para escribir constantes*/
const precio = 120;

console.log("Hola")
console.info("No hay descuentos. El precio "+precio);
console.warn("No le vayas a cambiar el precio");
console.error("Que NO");

/*Recibe como parametro una condicion logica, si es verdadera no hace nada, 
si es falsa lanza un error*/

console.assert(1 === 1); /*Estrictamente Igual*/
console.assert(1 == 1); /* Igual*/

console.assert(1 =="1");

//Alcance de las variables
for(var i = 1; i<=10; i++){

}
console.log(i);

for(let j=1; j<= 10; j++){
    console.log(j);
}


//Para interactuar con la pagina alert, prompt, confirm

/*El alert despliega una alerta en la pagina */
alert("Hola!");
let nombre = prompt("Como te llamas?");
console.log(nombre);

let is_hundry = confirm("¿Tienes hambre?");
console.log(is_hundry);


//FUNCIONES
function numero_alitas(){
    return 12;
}
console.log(numero_alitas());


let contador_click = 0;
let boton = document.getElementById("Contador_click");
boton.innerHTML = "Cuenta los Clicks";
boton.onclick = () => {
    contador_click++;
    console.log(contador_click);
}

//Arreglos
/*
const arreglo = ["Elemento"];
arreglo.push("Otro elemento");
arreglo["dos"] = 2;
arreglo.length = 10;
console.log(arreglo);*/

//OBJETOS

let objeto = {
    atributo_1: "valor 1",
    atributo_2: "valor 2",
}

