import { CaixaDaLanchonete } from "./caixa-da-lanchonete.js";

const exemplo1 = new CaixaDaLanchonete()
    .calcularValorDaCompra('debito', ['chantily,1']);

console.log(exemplo1);

const exemplo2 = new CaixaDaLanchonete()
    .calcularValorDaCompra('debito', ['cafe,1','chantily,1']);

console.log(exemplo2);

const exemplo3 = new CaixaDaLanchonete()
    .calcularValorDaCompra('credito', ['combo1,1','cafe,2']);

console.log(exemplo3);

const exemplo4 = new CaixaDaLanchonete()
    .calcularValorDaCompra('debito', ['cafe,1','chantily,2']);

console.log(exemplo4)

const exemplo5 = new CaixaDaLanchonete()
    .calcularValorDaCompra('dinheiro', ['cafe,1','chantily,2']);

console.log(exemplo5)

const exemplo6 = new CaixaDaLanchonete()
    .calcularValorDaCompra('credito', ['cafe,1','chantily,2']);

console.log(exemplo6)

const exemplo7 = new CaixaDaLanchonete()
    .calcularValorDaCompra('debito', ['cafe,3','chantily,3']);

console.log(exemplo7)

const exemplo8 = new CaixaDaLanchonete()
    .calcularValorDaCompra('debito', ['cafe,1','chantily,2','sanduiche,1','queijo,2']);

console.log(exemplo8)

const exemplo9 = new CaixaDaLanchonete()
    .calcularValorDaCompra('debito', ['combo1,1','combo2,2']);

console.log(exemplo9)

const exemplo10 = new CaixaDaLanchonete()
    .calcularValorDaCompra('debito', ['suco,1','sanduiche,1']);

console.log(exemplo10)

const exemplo11 = new CaixaDaLanchonete()
    .calcularValorDaCompra('debito', ['cafe,1','chantily,2','bolo,1']);

console.log(exemplo11)