//Con esto importamos las librerias necesarias para trabajar
//y definimos el puerto
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const express = require('express');
const app = express();
const port = 8000;

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(session({
    secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));

const lab10Rutas = require('./lab10.routes');
app.use('/lab10', lab10Rutas);


app.get('/', (req, res) => {
    res.send('Hello World!')
  })


  app.use((request, response, next) => {
    console.log('Otro middleware!');

    response.status(404);

    //Manda la respuesta
    response.send('Lo sentimos, la página que intentas buscar no se encuentra. Verifique su marcación'); 
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})