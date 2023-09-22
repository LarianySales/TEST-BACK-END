const receitasVo = {
  munguza: true,
  cuscuz: true,
  pizza: false,
  pirao: true,
  parmegiana: false,
  sopa: true,
  sorvete: false,
};

describe('Receitas de vó', () => {
  test('É receita de vó', () => {
    expect(receitasVo.munguza).toBeTruthy();
  });
  test('Não é receita de vó', () => {
    expect(receitasVo.pizza).toBeFalsy();
  });
  test('É receita de vó', () => {
    expect(receitasVo.cuscuz).toBeTruthy();
  });
  test('Não é receita de vó', () => {
    expect(receitasVo.parmegiana).toBeFalsy();
  });
  test('É receita de vó', () => {
    expect(receitasVo.sopa).toBeTruthy();
  });
  test('Não é receita de vó', () => {
    expect(receitasVo.sorvete).toBeFalsy();
  });
});
