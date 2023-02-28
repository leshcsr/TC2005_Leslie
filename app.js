console.log("Hola desde npm");
console.log("Hola desde nodemon");


//Copiado del Lab11
const express = require('express');
const app = express();

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.use((request, response, next) => {
    console.log('Otro middleware!');
    response.send('¡Hola mundo!'); //Manda la respuesta
});

app.listen(3000);

//Rutas
app.use('/home', (request, response, next) => {
    response.send('Respuesta de la ruta "/Home"'); 
});

/*
El profe agrego un codigo que ya tenia
^^^
app.use('/pedir', (request, respose, next)=>{
});*/




/*function prom_arr(arr){
    let p = 0;
    let acum = 0;
    while(p <= arr.length()){
        acum = acum + arr[p];
        p++;
    }
}*/