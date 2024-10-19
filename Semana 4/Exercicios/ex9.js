const word = 'interestelar';
const vogais = ['a', 'e', 'i', 'o', 'u'];

let numVogais = Array.from(word).filter(letra => vogais.includes(letra)).length;

console.log(numVogais);