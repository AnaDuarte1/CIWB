function contarVogais(palavra){
    let cont = 0;

    for(let i = 0; i < palavra.length; i++){

        letra = palavra[i];

        if(letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u' ){
            cont++; //Incrementa a contagem de vogais
        }
    }

    return cont;
}

    let qtde = contarVogais('interestelar');
    console.log('Vogais:', qtde);