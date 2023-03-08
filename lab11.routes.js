const express = require('express');

const router = express.Router();

router.get('/ruta1', (request, response, next) => {
    let html = '';
    response.send(html);
});
router.get('/ruta2', (request, response, next) => {
    let html = '';
    response.send(html);
});
router.get('/ruta3', (request, response, next) => {
    let html = '';
    response.send(html);
});

module.exports = router;