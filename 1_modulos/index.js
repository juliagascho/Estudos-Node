const funcaoImc = require("./moduloImc");
const calculadora = require("./moduloCalculadora");

console.log("-------------EXERCÍCIO 1");
const moduloImc = require("./moduloImc");
console.log(moduloImc.calcularImc(87.5, 1.88));
console.log(moduloImc.statusImc(21.5));

const resultado = moduloImc.calcularImc(88.5, 1.9);
console.log(moduloImc.statusImc(resultado));

// console.log(calculadora.soma(1, 1));
// console.log(calculadora.div(1, 1));
// console.log(calculadora.mult(calculadora.pi, 2));

// // const resultado = funcaoImc(87.5, 1.88);
// // console.log(resultado)

console.log("----------------EXERCÍCIO 2");
const convertTemp = require("./moduloConversores");
console.log(convertTemp.convertC(30));
console.log(convertTemp.convertF(90));

console.log("----------------EXERCÍCIO 3");
const login = require("./moduloLogin");
console.log(login("danilo@email.com", "123"));
