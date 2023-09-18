const Ordenarnumbers = require('../index');

test('ordenar a lista', () => {
  expect(Ordenarnumbers([9, 8, 4, 4])).toEqual([4, 4, 8, 9]);
});
