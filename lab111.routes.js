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

module.exports = router;