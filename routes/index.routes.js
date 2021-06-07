const express = require('express');
const route = express.Router();

const controllers = require('../controllers/home.controller');
const vacanteController = require('../controllers/vacantesController');

route.get('/', controllers.mostrarTrabajos);

//Crear vacante
route.get('/vacante/nueva',vacanteController.formularioNuevaVacante);

route.post('/vacante/nueva',vacanteController.agregarVacante);

//Mostrar vacante
route.get('/vacantes/:url',vacanteController.mostrarVacantes);

//Editar vacante
route.get('/vacantes/editar/:url',vacanteController.formEditarVacante)

module.exports = route;