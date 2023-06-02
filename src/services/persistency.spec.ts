// Teste de classe Persistency
import { Persistency } from './persistency';

// cada it() é um mock criado
describe('Persistency', () => {
  afterEach(() => jest.clearAllMocks()); // limpa os mocks depois de cada um executar
  // afterAll(() => jest.clearAllMocks()); // limpa os mocks depois de todos executarem

  it('should return undefined', () => {
    // System under test = sut
    const sut = new Persistency(); // sut -> classe que está sendo testada
    expect(sut.saveOrder()).toBeUndefined();
  });

  // teste precisa chamar o console.log uma vez
  it('should call console.log once', () => {
    const sut = new Persistency(); // sut -> classe que está sendo testada
    const consoleSpy = jest.spyOn(console, 'log'); // variável consoleSpy vai espionar o console de método log na classe
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledTimes(1); // espera que o método console.log seja chamado só uma vez, podemos trocar isso no parâmetro
  });

  it('should call console.log with "Pedido salvo com sucesso."', () => {
    const sut = new Persistency(); // sut -> classe que está sendo testada
    const consoleSpy = jest.spyOn(console, 'log'); // variável consoleSpy vai espionar o console de método log na classe
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledWith('Pedido salvo com sucesso.'); // espera que o console.log retorne o que está em parênteses, ele consegue ter acesso ao que foi logado no console também
  });
});
