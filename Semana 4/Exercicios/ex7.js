const vet1 = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
const vet2 = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29];

function mesclar(vet1, vet2){
    let vet3 = [];

    for(let i = 0; i < 10; i++){
        vet3.push(vet1[i]);
        vet3.push(vet2[i]);
    }

    console.log("Vetor 3:",vet3);
}

mesclar(vet1, vet2);