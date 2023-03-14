const express = require('express');
const path = require('path');
const router = express.Router();

const hot_cakesController = require('../controllers/hot_cakes.controller');

router.get('/ruta1', hot_cakesController.get_pedir);
router.get('/ruta3', hot_cakesController.get_lista);
router.get('/ruta2', hot_cakesController.get_pedido);

//Usamos el metodo POST 
router.post('/ruta1', hot_cakesController.post_pedir);


module.exports = router;