let palavras = ['ovo', 'cebola', 'sabão'];

let numCaracteres = palavras.filter(function(palavra){
    return palavra.indexOf('a') !== -1;
}).map(function(palavra){
    return palavra.length;
});

console.log(numCaracteres);