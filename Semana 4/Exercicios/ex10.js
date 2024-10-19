let frutas = ['abacaxi', 'banana', 'maçã', 'laranja', 'abacate', 'limão', 'tamarindo'];

let abrev = frutas.map(function(fruta){
    return fruta.substring(0,3);
});

console.log(abrev);
