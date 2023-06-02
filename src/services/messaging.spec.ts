// Teste de classe Persistency
import { Messaging } from './messaging';

// factory function para instanciar a classe
const createSut = () => {
  return new Messaging();
};

// cada it() é um mock criado
describe('Messaging', () => {
  afterEach(() => jest.clearAllMocks()); // limpa os mocks depois de cada um executar
  // afterAll(() => jest.clearAllMocks()); // limpa os mocks depois de todos executarem

  it('should return undefined', () => {
    // System under test = sut
    const sut = createSut(); // sut -> classe que está sendo testada
    expect(sut.sendMessage('teste')).toBeUndefined(); // enviamos o teste porque o método pede um parâmetro e retorna retorna undefined, ou seja, nada (void)
  });

  // teste precisa chamar o console.log uma vez
  it('should call console.log once', () => {
    const sut = createSut(); // sut -> classe que está sendo testada
    const consoleSpy = jest.spyOn(console, 'log'); // variável consoleSpy vai espionar o console de método log na classe
    sut.sendMessage('teste'); // chamamos o método passando o parâmetro que ele pede, isso mostra um console.log
    expect(consoleSpy).toHaveBeenCalledTimes(1); // espera que o método console.log seja chamado só uma vez, podemos trocar isso no parâmetro
  });

  it('should call console.log with "Mensagem enviada: " and msg', () => {
    const sut = createSut(); // sut -> classe que está sendo testada
    const consoleSpy = jest.spyOn(console, 'log'); // variável consoleSpy vai espionar o console de método log na classe
    sut.sendMessage('teste');
    expect(consoleSpy).toHaveBeenCalledWith('Mensagem enviada: ', 'teste'); // espera que o console.log retorne o que está em parênteses, ele consegue ter acesso ao que foi logado no console também
  });
});
