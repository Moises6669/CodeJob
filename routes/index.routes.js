const express = require('express');
const route = express.Router();

const controllers = require('../controllers/home.controller');

route.get('/', controllers.mostrarTrabajos);


module.exports = route;