const express = require('express');
const route = express.Router();

const controllers = require('../controllers/home.controller');
const vacanteController = require('../controllers/vacantesController');

route.get('/', controllers.mostrarTrabajos);

route.get('/vacante/nueva',vacanteController.formularioNuevaVacante);



module.exports = route;