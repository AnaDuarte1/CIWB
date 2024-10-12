let message = ' ';
const offset = 4;
const secret = 'LIPPSASVPH';

/* escreva aqui o código que decifra a mensagem */
   
    const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let resultado = ' ';

    for(let i = 0; i < secret.length; i++){
        let letra = secret[i];

        if(alfabeto.indexOf(letra) !== -1){
            let posicaoA =  alfabeto.indexOf(letra);

            let novaP = (posicaoA - offset + alfabeto.length) % alfabeto.length;
            
            message += alfabeto[novaP];
        }else{
            message += letra;
        }            
    }

console.log(message);
