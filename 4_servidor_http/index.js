const http = require("http"); //pacote http

const host = "localhost";
const porta = 3000;

//dentro do pacote http tem a função: createServer
const servidor = http.createServer((requisicao, resposta) => {
    console.log("Requisição ocorreu!");
    //o que eu quero responder para quem fez a solicitação:
    resposta.write("<h1>Hello world!</h1>");
    resposta.write("<p>Teste</p>");
    // encerra a comunicação:
    resposta.end();
});

// servidor fica esperando requisições
servidor.listen(porta, host);

/** EXERCÍCIO VI: Escreva na resposta do servidor informações sobre
 * o sistema usando o módulo os.
 */