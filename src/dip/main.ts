/*
DIP - Dependency Inversion Principle (Princípio da inversão de Dependência) Módulos de alto nível não devem depender de
módulos de baixo nível. Ambos devem depender de abstrações.
Dependa de abstrações, não de iomplementações.
Abstrações não devem depender de detalhes. Detalhes devem depender de abstrações
*/
import { Order } from './classes/order';
import { ShoppingCart } from './classes/shopping-cart';
import { Messaging } from './services/messaging';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { NoDiscount } from './classes/discount';
import { EnterpriseCustomer } from './classes/customer';
import { MessagingProtocol } from './classes/interfaces/messaging-protocol';

// const fiftyPercentDiscount = new FiftyPercentDiscount();
// const tentyPercentDiscount = new TenPercentDiscount();
const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(noDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
// const individualCustomer = new IndividualCustomer(
//   'Luiz',
//   'Miranda',
//   '111.111.111-34',
// );
const enterpriseCustomer = new EnterpriseCustomer(
  'Empresa Gigante',
  '2222222222222',
);

// classe mockada que finge enviar e-mail, basta implementar o MessagingProtocol que é a interface com os métodos de Messaging
class MessagingMock implements MessagingProtocol {
  sendMessage(msg: string): void {
    console.log('A mensagem foi enviada pelo MOCK.');
  }
}

const messagingMock = new MessagingMock();

const order = new Order(
  shoppingCart,
  messagingMock,
  persistency,
  enterpriseCustomer,
);

shoppingCart.addItem(new Product('camiseta', 49.9));
shoppingCart.addItem(new Product('caderno', 9.9));
shoppingCart.addItem(new Product('lápis', 1.59));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDescont());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
