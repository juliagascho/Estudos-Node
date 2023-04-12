/** EXERCÍCIO VI: Escreva na resposta do servidor informações sobre
 * o sistema usando o módulo os.
 */

const http = require("http");
const host = "localhost";
const porta = 4000;
const os = require("os");

const arquitetura = os.arch();
const plataforma = os.platform();
const usuario = os.hostname();
const versao = os.version();

const servidor = http.createServer((requisicao, resposta) => {

    console.log("Requisição ocorreu!");
    resposta.write(`<h1>Informações do sistema:</h1>`);
    resposta.write("<hr/>");
    resposta.write(`<h1>${arquitetura}</h1>`);
    resposta.write(`<h1>${plataforma}</h1>`);
    resposta.write(`<h1>${usuario}</h1>`);
    resposta.write(`<h1>${versao}</h1>`);

    resposta.write("<hr/>");
    resposta.write(`<p>${os.hostname()} | ${os.cpus().length}</p>`)
        
    resposta.end();
});

servidor.listen(porta, host);



