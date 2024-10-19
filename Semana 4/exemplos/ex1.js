
function processar(limite, statusCallback){
    for(let i = 0; i < limite; i++){
        if(i % 10 == 0){
            statusCallback(i);
        }
    }
}

/*function myStatus(step){   função sem muita importância
    console.log("Step", step);
}*/


processar(100, function(step){
    console.log("Step", step);
});