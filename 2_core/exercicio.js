/** EXERCÍCIO IV: Escreva um arquivo txt com as informações do seu sistema:
 * Explore as funções do módulo os e gere um arquivo txt com informações
 * da máquina.
 */

// resolução professor

const os = require("os");
const fs = require("fs");

const arquitetura = os.arch();
const plataforma = os.platform();
const usuario = os.hostname();
const versao = os.version();

fs.writeFileSync(
  "./os-info.txt",
  `${arquitetura}\n${plataforma}\n${usuario}\n${versao}`
);