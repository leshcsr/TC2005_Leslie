const express = require('express');
const path = require('path');
const router = express.Router();

const higienicosController = require('../controllers/hot_cakes.controller');

router.get('/lista', higienicosController.get_lista);
router.get('/nuevo', higienicosController.get_nuevo);
router.get('/pedir', higienicosController.get_pedir);

module.exports = router;