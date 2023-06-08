// Teste de classe Persistency
import { Product } from './product';

// factory function para instanciar a classe
const createSut = (name: string, price: number): Product => {
  return new Product(name, price);
};

// cada it() é um mock criado
describe('Messaging', () => {
  afterEach(() => jest.clearAllMocks()); // limpa os mocks depois de cada um executar
  // afterAll(() => jest.clearAllMocks()); // limpa os mocks depois de todos executarem

  it('should have properties name and price', () => {
    // System under test = sut
    const sut = createSut('Camiseta', 49.9); // sut -> classe que está sendo testada
    expect(sut).toHaveProperty('name', 'Camiseta');
    expect(sut.price).toBeCloseTo(49.9); // testes de valores flutuantes, geralmente é com toBeCloseTo
  });
});
