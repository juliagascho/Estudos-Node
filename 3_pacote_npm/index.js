const CPF = require("cpf");

console.log(CPF.generate());
console.log(CPF.format("11111111111"));
console.log(CPF.isValid("11111111111"));

/** EXERCÍCIO V: Crie um arquivo txt com 1000 cpf aleatórios.
 * Desafio: Leia o arquivo e mostre um por um dos 1000 cpf
 * que estão dentro do arquivo.
 */

const fs = require("fs");

function gerarCPF() {
  const cpfs = [];
  for (let i = 0; i < 100; i++) {
    cpfs.push(CPF.generate());
  }
  return cpfs;
}

fs.writeFileSync("./cpfs.txt", gerarCPF().join("\n"));

// Neste exemplo, a função gerarCPF() cria um array cpfs e adiciona os 100 CPFs gerados pelo loop utilizando o método push(). Em seguida, o array é retornado e o método join("\n") é utilizado para concatenar os CPFs em uma única string, separando cada um por uma nova linha, em vez de virgula. Finalmente, a string resultante é escrita no arquivo cpfs.txt

