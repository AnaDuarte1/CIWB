function jogar(){
    let num = 30;

    let numUsuario = parseInt(prompt("Digite um número de 1 - 100:"));


        if(numUsuario < num){
            console.log("É maior!");
        }else if(numUsuario > num){
            console.log("É menor!");
        }else{
            console.log("Acertou!!!");
        }
    
   
}

jogar();