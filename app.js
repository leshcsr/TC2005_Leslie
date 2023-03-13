const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');

const misRutas = require('./routes/lab13.routes');
app.use('/modulo', misRutas);

const misRutas1 = require('./routes/lab1313.routes');
app.use('/modulo1', misRutas1);



//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});
app.use('/home', (request, response, next) => {
    response.send('Bienvenido a casa!'); 
});
app.use((request, response, next) => {
    console.log('Otro middleware!');
    response.status(404);
    //Manda la respuesta
    response.send('Lo sentimos, la página que intentas buscar no se encuentra. Verifique su marcación'); 
});

app.listen(8080);