describe('Primitive values', () => {
  it('should test jest assertions', () => {
    const number = 10;

    expect(number).toBe(10);
    expect(number).toEqual(10); // checa alem de valores, objetos também

    expect(number).not.toBeNull(); // espera que o numero não seja null -> .not.toBeNull
    expect(number).toBeTruthy();

    expect(number).toBeGreaterThan(9); // verifica se number é maior que 9
    expect(number).toBeGreaterThanOrEqual(10); // verifica se é maior ou igual a 9
    expect(number).toBeLessThanOrEqual(11); // verifica se é menor que 11
    expect(number).toBeLessThanOrEqual(10); // verifica se é menor ou igual a 10

    expect(number).toBeCloseTo(10.001); // verifica se se o number é próximo ao que foi passado
    expect(number).toBeCloseTo(9.996);

    expect(number).toHaveProperty('toString'); // verifica se number tem a propriedade toString
  });
});

describe('Object', () => {
  it('should test jest assertions with objects', () => {
    const person = { name: 'luiz', age: 30 };
    const anotherPerson = { ...person };

    expect(person).toEqual(anotherPerson); // o toEqual verifica objetos se são iguais ou não
    expect(person).toHaveProperty('age'); // verifica se existe a propriedade 'age' em person
    expect(person).toHaveProperty('age', 30); // verifica se existe a propriedade 'age' em person e se ela tem o valor 30
    expect(person).not.toHaveProperty('lastName'); // verifica se não existe a propriedade 'lastName' no person

    expect(person.name).toBe('luiz'); // verifica se a propriedade person.name é 'luiz'
  });
});
