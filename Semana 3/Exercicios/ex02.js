const xs = [5, 3, 6, 1, 2, 4];

menor = 9999999;
maior = 0;

for(let i = 0; i < 6; i++){
    if(xs[i] < menor){
        menor = xs[i];
    }else if(xs[i] > maior){
        maior = xs[i];
    }
}

console.log("Menor: " + menor);
console.log("Maior: " + maior);