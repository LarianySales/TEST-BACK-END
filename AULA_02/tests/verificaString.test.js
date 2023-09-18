test('Verificar se existe @ no email', () => {
  expect('kikaco@gmail.com').toMatch(/@/);
});

test('Verifique se existe #', () => {
  expect('capislockjio').not.toMatch(/#/);
});

const frutas = ['manga', 'laranja', 'goiaba', 'maçã', 'pinha', 'jaca', 'pitaya'];

test('Verifique se tem pitaya na lista de frutas', () => {
  expect(frutas).toContain('pitaya');
});

const feira = ['arroz', 'açúcar', 'presunto', 'café'];

test('Não pode ter leite', () => {
  expect(feira).not.toContain('leite');
});
