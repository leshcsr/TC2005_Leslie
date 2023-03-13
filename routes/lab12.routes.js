const express = require('express');
const path = require('path');
const router = express.Router();

const hot_cakes = [
    {
        nombre: "belgas",
        imagen: "https://t1.uc.ltmcdn.com/es/posts/8/9/7/como_hacer_waffles_con_harina_de_hot_cakes_50798_paso_5_600.jpg",
        descripcion: "Hot cakes ricos",
        handle: "@belgas",
        ingredientes: "harina, huevo, mantequilla de normandía",
        precio: "150",
    },
    {
        nombre: "avena",
        imagen: "https://www.recetasnestle.com.mx/sites/default/files/srh_recipes/99c36783d5de1a8cc8ab4a1494bcf111.jpg",
        descripcion: "Hot cakes ricos de avena",
        handle: "@avena",
        ingredientes: "harina de avena, huevo, mantequilla, plátano",
        precio: "150",
    },
    {
        nombre: "japoneses",
        imagen: "https://www.keyingredient.com/media/09/82/b08496cd78ddbd4bdda4f441160ddc6d4b15.jpg/rh/japanese-hot-cake.jpg",
        descripcion: "Hot cakes ricos de japón",
        handle: "@japoneses",
        ingredientes: "harina, claras de huevo, mantequilla, polvo para hornear, azúcar",
        precio: "150",
    },
    {
        nombre: "chocolate",
        imagen: "https://themerrymakersisters.com/wp-content/uploads/2017/01/BREKKY-FUNDAY-HOTCAKES-LANDSCAPE.jpg",
        descripcion: "Hot cakes ricos de chocolate",
        handle: "@chocolate",
        ingredientes: "harina, huevo, mantequilla, cocoa",
        precio: "150",
    },
    {
        nombre: "salados",
        imagen: "https://bulma.io/images/placeholders/1280x960.png",
        descripcion: "Hot cakes ricos de avena",
        handle: "@salados",
        ingredientes: "harina, huevo, mantequilla con sal",
        precio: "150",
    },
    {
        nombre: "americanos",
        imagen: "https://bulma.io/images/placeholders/1280x960.png",
        descripcion: "Hot cakes ricos mantequillosos",
        handle: "@avena",
        ingredientes: "harina, huevo, mucha mantequilla, leche",
        precio: "150",
    },
    {
        nombre: "plátano",
        imagen: "https://bulma.io/images/placeholders/1280x960.png",
        descripcion: "Hot cakes ricos de plátano",
        handle: "@platano",
        ingredientes: "harina, huevo, mantequilla, plátano, canela, nueces",
        precio: "150",
    },
    {
        nombre: "minis",
        imagen: "https://bulma.io/images/placeholders/1280x960.png",
        descripcion: "Hot cakes ricos de plátano",
        handle: "@minis",
        ingredientes: "harina, huevo, mantequilla, leche, dispensador",
        precio: "80",
    },
];


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

router.get('/ruta3', (request, response, next) => {
    response.render('lista', {hot_cakes: hot_cakes});
});


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