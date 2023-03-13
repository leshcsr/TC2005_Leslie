const express = require('express');

const router = express.Router();

router.get('/ruta4', (request, response, next) => {
    let html = '';
    response.send(html);
});
router.get('/ruta5', (request, response, next) => {
    let html = '';
    response.send(html);
});

//Usamos el metodo POST 
router.post('/ruta4', (request, response, next) => {
    console.log(request.body)
});
router.post('/ruta5', (request, response, next) => {
    console.log(request.body)
});

module.exports = router;