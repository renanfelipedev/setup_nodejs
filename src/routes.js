const { Router } = require('express');

const { SayHelloController } = require('./controllers/SayHelloController');

const routes = Router();

routes.get('/', SayHelloController.index);

module.exports = { routes };
