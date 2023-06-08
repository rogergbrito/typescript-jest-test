// Teste de classe Persistency
import {
  Discount,
  FiftyPercentDiscount,
  NoDiscount,
  TenPercentDiscount,
} from './discount';

// factory function para instanciar a classe
const createSut = (classname: new () => Discount): Discount => {
  return new classname();
};

// cada it() é um mock criado
describe('Discount', () => {
  afterEach(() => jest.clearAllMocks()); // limpa os mocks depois de cada um executar
  // afterAll(() => jest.clearAllMocks()); // limpa os mocks depois de todos executarem

  it('should have no discount', () => {
    const sut = createSut(NoDiscount); // sut -> classe que está sendo testada
    expect(sut.calculate(10.99)).toBeCloseTo(10.99); // pega se o valor estiver próxio, o toBe só pega se for identico
  });

  it('should apply 50% discount on price', () => {
    const sut = createSut(FiftyPercentDiscount); // sut -> classe que está sendo testada
    expect(sut.calculate(150.5)).toBeCloseTo(75.25); // pega se o valor estiver próxio, o toBe só pega se for identico
  });

  it('should apply 10% discount on price', () => {
    const sut = createSut(TenPercentDiscount); // sut -> classe que está sendo testada
    expect(sut.calculate(10)).toBeCloseTo(9); // pega se o valor estiver próxio, o toBe só pega se for identico
  });
});
