function potencia(a,b){
    let resultado = 1;
    for(let i = 0; i < b; i++){
         resultado *= a;
    }

    console.log("Potencia:", resultado);
}

potencia(2,3);