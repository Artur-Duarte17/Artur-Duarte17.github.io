const safeEval = require('../JavaScript/safeEval');

describe('safeEval', () => {
  test('avalia expressoes matematicas simples', () => {
    expect(safeEval('1+2*3')).toBe(7);
  });

  test('retorna "Erro" para expressoes invalidas', () => {
    expect(safeEval('1++2')).toBe('Erro');
  });
});
