const express = require('express');
const reservaController = require('../controller/ReservaController.js');
const reservaLivro = new reservaController();
const router = express.Router()

router.get('/', reservaLivro.getAll)
router.put('/:ID', reservaLivro.reservar)

module.exports = router;

