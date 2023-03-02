//AQUI EMPIEZA EL LAB 8

const { resolve } = require('path');

//Funcion que recibe un arreglo y devuelve su promedio
function prom_arr(arr) {
    let p = 0;
    let acum = 0;
    while(p <= arr.length-1){
        acum = acum + arr[p];
        p++;
    }
    return acum/arr.length;
}
let arreglo = [1, 6, 2, 3, 8];
let a = prom_arr(arreglo);
console.log("El promedio del arreglo es: "+a)

//Funcion que recibe un string y escribe el string en un archivo de texto
function w_sring(palabra) {
    const fs = require('fs');
    let escribir = new Promise((resolve, reject) => {
        fs.writeFile('index.txt',palabra, (error)=>{
            if(error){
                reject(error);
            }else{
                resolve();
            }
        });
    });

    escribir.then( () =>{
        console.log("¡Se añadio la palabra con exito!")
    })
    .catch((error) =>{
        console.log("Ocurrio un error: ", error)
    })
        
}
w_sring("Lab 8");
//Ortiz Ordoñez, J. [John Ortiz Ordoñez] (02 de febrero de 2023). JavaScript - Ejercicio 313:
//Crear un Archivo de Texto Plano usando un Objeto Promise en Node.js [Video]. Recuperado de: 
//https://www.youtube.com/watch?v=P9YdELzuuwc



console.log("Hola desde npm");
console.log("Hola desde nodemon");


//Copiado del Lab11

const express = require('express');
const bodyParser = require('body-parser');
const { request } = require('express');
const path = require('path');

const app = express();


//Middleware
//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    //Le permite a la petición avanzar hacia el siguiente middleware
    next(); 
});

app.use('/home', (request, response, next) => {
    response.send('Bienvenido a casa!'); 
});

const hotcakesRutas = require('./routes/hot_cakes.routes');

app.use('/hot_cakes', hotcakesRutas);

app.use((request, response, next) => {
    console.log('Otro middleware!');

    response.status(404);

    //Manda la respuesta
    response.send('Lo sentimos, ya no tenemos hot cakes'); 
});

app.listen(3000);




//Rutas
/*
app.use('/home', (request, response, next) => {
    response.send('Respuesta de la ruta "/Home"'); 
});


El profe agrego un codigo que ya tenia
^^^
app.use('/pedir', (request, respose, next)=>{
});*/

//si ninguna ruta es valida
/*
    app.use((request, response, next) =>{
        console.log('Otro Middleware');
        response.status(404);
        //Manda la respuesta
        response.send('Ya no tenemos hot cakes');
    })


app.listen(3000);

*/
