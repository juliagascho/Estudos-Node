// * EXERCÍCIO VII: Instale o pacote cpf, e na resposta escreva
// * um cpf aleatório.

const CPF = require("cpf");
const http = require("http");
const fs = require("fs");

const host = "localhost";
const porta = 5000;

function gerarCPF() {
    const cpfs = [];
    for (let i = 0; i < 100; i++) {
      cpfs.push(CPF.generate());
    }
    return cpfs;
  }
  fs.writeFileSync("./cpfs.txt", gerarCPF().join("\n"));
  
const servidor = http.createServer((requisicao, resposta) => {
    console.log("Requisição ocorreu!");
    
    const cpfs = fs.readFileSync("./cpfs.txt", "utf-8");
    resposta.write(`<h1>Números de cpf gerados:</h1><p>${cpfs}</p>`);

    //professor:
    resposta.write(`<p>Proprietario: ${CPF.generate()}</p>`)
            
    resposta.end();
});

servidor.listen(porta, host);

