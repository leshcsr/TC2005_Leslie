const express = require('express');

const router = express.Router();

//Aqui se encuentra el contenido de la ruta
router.get('/ruta1', (request, response, next) => {

    let html = `
        <!DOCTYPE html>
        <html>
            <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <title>Ruta 1</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
          
            </head>
            <body>
            <div class="container is-max-desktop">
            <br>
                <h1 class="title is-1">Esta pagina corresponde a la ruta 1</h1>

            <br><br>

                <article class="media">
                    <figure class="media-left">
                        <p class="image is-64x64">
                        <img src="https://bulma.io/images/placeholders/128x128.png">
                        </p>
                    </figure>

                    <div class="media-content">
                        <div class="content"><p>
                            <strong>Leslie Sanchez</strong> 
                            <br>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                        </p></div>
                    </article>
                    <article class="media">
                    <figure class="media-left">
                        <p class="image is-64x64">
                        <img src="https://bulma.io/images/placeholders/128x128.png">
                        </p>
                    </figure>

                    <div class="media-content">
                        <div class="content"><p>
                            <strong>Leslie Sanchez</strong> 
                            <br>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                        </p></div>
                    </article>
                    <article class="media">
                    <figure class="media-left">
                        <p class="image is-64x64">
                        <img src="https://bulma.io/images/placeholders/128x128.png">
                        </p>
                    </figure>

                    <div class="media-content">
                        <div class="content"><p>
                            <strong>Leslie Sanchez</strong> 
                            <br>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                        </p></div>
                    </article>

                </div>
            </body>
        </html>
    `;

    response.send(html);
});

router.get('/ruta2', (request, response, next) => {
    let html ='';
    response.send(html);});
router.get('/ruta3', (request, response, next) => {
    let html ='';    
    response.send(html);});


//Definimos las rutas y las mandamos a llamar
router.post('/ruta1', (request, response, next) => {
    console.log(request.body)
});
router.post('/ruta2', (request, response, next) => {
    console.log(request.body)
});
router.post('/ruta3', (request, response, next) => {
    console.log(request.body)
});

module.exports = router;