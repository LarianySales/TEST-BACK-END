const { somaNumeros, subtraiNumeros } = require('../index');

test('A função deve somar dois números', () => {
  const esperado = 1000;
  const retornado = somaNumeros(800, 200);

  expect(retornado).toBe(esperado);
});

test('A função deve subtrair two numbers', () => {
  const aguardado = 3;
  const mandado = subtraiNumeros(10, 7);

  expect(aguardado).toBe(mandado);
});
