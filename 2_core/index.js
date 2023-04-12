// core modules = módulos embutidos

// módulo operacional system (os)
const os = require("os");

console.log(os.arch());         // arquitetura - 32, 64, ou outro
console.log(os.platform());     // windows, unix
console.log(os.type());         // windows, linux
console.log(os.version());      // 
console.log(os.uptime());
console.log(os.freemem());      // bytes
console.log(os.totalmem());     // bytes
console.log(os.cpus().length);
console.log(os.homedir());

// modulo fs = filesystem
const fs = require("fs");
// escreve o texto em um novo arquivo
fs.writeFileSync("./batata.txt", "BATATA É BOM DEMAIS");

const arquivo = fs.readFileSync("./batata.txt");
console.log(arquivo.toString());

/** EXERCÍCIO IV: Escreva um arquivo txt com as informações do seu sistema:
 * Explore as funções do módulo os e gere um arquivo txt com informações
 * da máquina.
 */

const arquivo2 = fs.readFileSync("./exercicio4.txt");

fs.writeFileSync("./exercicio4.txt", `
        Configurações máquina:
        ${(os.arch())},
        ${(os.platform())},
        ${(os.type())},
        ${(os.version())},
        ${(os.freemem())},
        ${(os.totalmem())},
        ${(os.cpus().length)},        
        `);


