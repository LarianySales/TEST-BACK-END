const converte = require('../celsius');

test('converter', () => {
  expect(converte(100).toBe(212));
});
