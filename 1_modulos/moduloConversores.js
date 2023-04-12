/** EXERCÍCIO II: Crie um novo módulo chamado moduloConversores.js e exporte funções que convertem, utilize elas no index usando o require:
 * - celsius para fahrenheit;
 * - fahrenheit para celsius;
 */

function convertC(c) {
        const valF = (c * (9/5)) + 32;
        return valF
}
function convertF(f) {
        const valC = ((f-32)*(5/9));
        return valC
}
module.exports = {convertC, convertF}