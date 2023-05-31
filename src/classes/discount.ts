// classe abstrata de desconto que vao servir para dar extends nas classes de porcentagem de desconto
export abstract class Discount {
  protected discount = 0;
  // método calculate vai estar em todas as extends de Discount até que seja reescrevido
  calculate(price: number): number {
    return +(price - price * this.discount).toFixed(2);
    // throw new Error('Not Implemented Error'); // colocando isso, só podemos rodar o programa se criarmos o método calculate nas sub-classes
  }
}

export class FiftyPercentDiscount extends Discount {
  protected readonly discount = 0.5;
}

export class TenPercentDiscount extends Discount {
  protected readonly discount = 0.1;
}

export class NoDiscount extends Discount {}
