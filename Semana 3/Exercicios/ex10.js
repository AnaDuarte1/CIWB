function corrigirTexto(texto){
    let palavra = texto.split(' ');
    let resul = [];

    for(let i = 0; i < palavra.length ; i++){
        let letra = palavra[i];

        if(letra.length >= 4){
            let primeiraS = letra.slice(0,2);
            let possivelP = letra.slice(2,4);

            if(primeiraS == possivelP){
                letra = primeiraS + letra.slice(4);
            }
        }

         resul.push(letra);
    }

    return resul.join(' ');
}
const texto1 = 'Juca comprou fafarinha na memercearia e papagou 4 reais o quilo. A mamae de Juca pediu para ele comprar mamais 2 quilos.';

const texto2 = 'O papassarinho vovoou para bem longe.';

console.log(corrigirTexto(texto1));
console.log(corrigirTexto(texto2));