let idade = [12, 15, 14, 13, 16, 17, 15, 18, 14, 16, 12, 13, 17, 15, 16, 18, 14, 13, 12, 17, 15, 18, 16, 14, 13, 12, 17, 15, 16, 18];
let altura = [150, 160, 155, 158, 165, 170, 162, 175, 154, 168, 152, 157, 169, 163, 160, 172, 161, 156, 153, 174, 167, 173, 158, 165, 159, 162, 171, 166, 160, 175];

function alturaAluno(idade,altura){
    let aux = 0;
    let alturaT = 0;
    
    for(let i = 0; i < 30; i++){
        alturaT = alturaT + altura[i];
    }
        
    let media = alturaT / 30; 

    for(let i = 0; i < 30; i++){
        if(idade[i] > 13 && altura[i] < media){
            aux++;
        }
    }
  
    console.log("Total:",aux);
}

alturaAluno(idade, altura);
