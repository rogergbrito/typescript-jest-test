// tanto faz usar it ou test
describe('TESTENDO ALGUMA COISA', () => {
  // teste deveria retornar 1, o primeiro parâmetro é uma descrição
  it('should return one', () => {
    const number = 1;
    expect(number).not.toBe(1); // espera que não seja 1
  });
});

describe('TESTENDO OUTRA COISA', () => {
  test('descrição do teste (TESTE)', () => {
    const nome = 'Luiz';
    expect(nome).toBe('Luiz'); // espera que seja 'Luiz'
  });
});
