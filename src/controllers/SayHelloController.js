const { sayHello } = require('../services/seyHelloWorld');

const SayHelloController = {
  index: (request, response) => response.send(sayHello()),
};

module.exports = { SayHelloController };
