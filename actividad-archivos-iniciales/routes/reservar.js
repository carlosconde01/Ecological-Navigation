var express = require('express');
var router = express.Router();
let reservaController = require('../controllers/reserva')


//Listar las reservas
router.get('/', reservaController.reserva_list);

//Añadir nueva reserva
router.get('/create', reservaController.reserva_get)
router.post('/create', reservaController.reserva_post)


module.exports = router;