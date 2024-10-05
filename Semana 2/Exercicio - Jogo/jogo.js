    var num = 30;


    do{    
        var numUsuario = parseInt(prompt("Digite um número de 1 - 100:"));
        if(numUsuario < num){
            alert("É maior!");
        }else if(numUsuario > num){
            alert("É menor!");
        }else{
             alert("Acertou!!!");
        }

    } while(num != numUsuario);
         
        

