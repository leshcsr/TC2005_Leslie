/*const http = require("http");
const host = 'localhost';
const port = 8080;

const requestListener = function (req, res) {
    res.writeHead(200);
    res.end("My first server!");
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});*/
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(session({
    secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));

app.use((request, response, next) => {
    console.log('Middleware!');

    //Le permite a la petición avanzar hacia el siguiente middleware
    next(); 
});

app.use('/home', (request, response, next) => {

    response.send('Bienvenido a casa!'); 
});

//const rutasUsers = require('./rutas/users.routes');

//app.use('/users', rutasUsers);

const hotcakesRutas = require('./rutas/hotcakes.routes');

app.use('/hot_cakes', hotcakesRutas);

app.get('/', (req, res) => {
  res.send('Hello World!')
})
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


