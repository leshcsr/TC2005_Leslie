const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

const misRutas = require('./routes/lab13.routes');
app.use('/modulo', misRutas);

const misRutas1 = require('./routes/lab1313.routes');
app.use('/modulo1', misRutas1);


app.use((request, response, next) => {
    console.log('Otro middleware!');
    response.status(404);
    //Manda la respuesta
    response.send('Lo sentimos, la página que intentas buscar no se encuentra. Verifique su marcación'); 
});




app.listen(8080);