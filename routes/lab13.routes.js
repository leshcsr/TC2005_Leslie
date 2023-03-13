const express = require('express');
const path = require('path');
const router = express.Router();

const hot_cakesController = require('../controllers/hot_cakes.controller');

router.get('/ruta1', (request, response, next) => {
    let html = `
        <!DOCTYPE html>
        <html>
            <head>
                <meta charset="utf-8">
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
                <title>Escoge tu desayuno</title>
            </head>
            <body>
            <br> <br>
            <div class="container is-max-desktop">
            <div class="notification is-primary">
                <h1>Hot cakes</h1>
                <form action="/modulo/ruta2" method="POST">
                    <fieldset>
                        <legend>Escoge tu desayuno:</legend>
                        <div>
                            <input type="checkbox" id="malteada" name="malteada">
                            <label for="malteada">Malteada</label>
                        </div>
                        <div>
                            <input type="checkbox" id="cafe" name="cafe">
                            <label for="cafe">Café</label>
                        </div>
                        <div>
                            <input type="number" id="hot_cakes" name="hot_cakes" value="0" min="0">
                            <label for="hot_cakes"> hot cakes</label>
                        </div>
                    </fieldset>
                    <br>
                    <input type="submit" value="pedir">
                </form>
            
                </div>
                </div>
            </body>
        </html>
    `;
    response.send(html);
});

router.get('/ruta2', (request, response, next) => {
    let html = '<p>Regresa, no has pedido hot Cakes</p>';
    response.send(html);
});

router.get('/lista', hot_cakesController.get_lista);

//Usamos el metodo POST 
router.post('/ruta1', (request, response, next) => {
    console.log(request.body)
});
router.post('/ruta2', (request, response, next) => {
    console.log(request.body)
    response.send("Pediste " + request.body.hot_cakes + " hot cakes");
});
router.post('/ruta3', (request, response, next) => {
    console.log(request.body)
});

module.exports = router;