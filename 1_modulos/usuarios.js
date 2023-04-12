/** EXERCÍCIO III: Crie um novo módulo chamado usuarios.js e exporte um array de objetos
 * usuário (nome, email e senha). Crie um novo módulo login com uma função autenticar,
 * ela deve receber email e senha e verificar se estes dados são válidos de acordo com o * array do módulo de usuários (utilize find, filter o etc). Mostrar uma mensagem se são * válidos ou não.
 */


let usuarios = [
    {id: 0, nome: "Danilo", email: "danilo@email.com", senha: "123"},
    {id: 1, nome: "Danilow", email: "danilow@email.com", senha: "321"},
    {id: 2, nome: "Danilin", email: "danilin@email.com", senha: "456"}
];

module.exports = usuarios;