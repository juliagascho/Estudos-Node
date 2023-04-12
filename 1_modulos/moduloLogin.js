/** EXERCÍCIO III: Crie um novo módulo chamado usuarios.js e exporte um array de objetos
 * usuário (nome, email e senha). Crie um novo módulo login com uma função autenticar,
 * ela deve receber email e senha e verificar se estes dados são válidos de acordo com o * array do módulo de usuários (utilize find, filter o etc). Mostrar uma mensagem se são * válidos ou não.
 */

let usuarios = require("./usuarios");

function logar(email, senha){
    let podeLogar = false;
    usuarios.forEach((usuario) =>{
        
        if(usuario.email === email){
            if(usuario.senha === senha){
                podeLogar = true;
            }
        }
        
    })
    if (podeLogar){
        return "Logou!"
    } else {
        return "Não foi autorizado logar"
    }
}


module.exports = logar;