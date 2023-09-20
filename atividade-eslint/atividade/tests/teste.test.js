// q1
// test('Formate o nome para letras maiusculas', () => {
//   const nome = 'ana';
//   const sobrenome = 'carlos';

//   expect(console.log(`nome:${nome.toUpperCase()} sobrenome: ${sobrenome.toUpperCase()}`));
// }); -- funcionou

// q1
// const formatName = require('../index');

// test('Verificar se estar em letras maiúculas', () => {
//   expect(formatName('mario', 'luigi')).toBe('MARIO LUIGI');
// });
// q2
// const VerificarIdade = require('../index');

// test('Verificar se é maior de idade', () => {
//   const idade = 18;
//   expect(VerificarIdade(idade)).toBeGreaterThanOrEqual(18);
// });
// q3

const getUser = require('../index');

test('Verificar obj', () => {
  const userEsperado = {
    nome: 'Carlos',
    idade: 90,
    email: 'carlos@gmail.com',
  };
  const user = getUser('Carlos', 90, 'carlos@gmail.com');
  // pode usar .toEqual
  expect(user).toMatchObject(userEsperado);
});
