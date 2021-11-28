const { sayHello } = require('../services/seyHelloWorld');

describe('Say hello tests', () => {
  it('Should say hello world', () => {
    const response = sayHello();

    expect(response).toBe('Hello World!');
  });

  it('Shoud say hello Michael Jackson', () => {
    const response = sayHello('Michael Jackson');

    expect(response).toBe('Hello Michael Jackson!');
  });
});
