/** EXERCÍCIO VI: Crie uma nova pasta (pacote_exercicio) e rode
 * npm init -y. Configure o "start" para "node ./index.js".
 * Instale o pacote colors e utilize este pacote.
 * https://www.npmjs.com/package/colors
 */

var colors = require('colors');
 
console.log('hello'.green); // outputs green text
console.log('i like cake and pies'.underline.red) // outputs red underlined text
console.log('inverse the color'.inverse); // inverses the color
console.log('OMG Rainbows!'.rainbow); // rainbow
console.log('Run the trap'.trap); // Drops the bass