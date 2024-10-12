let arr = [2,4,6,5,3,7]; 
// 2,3,4,5,6
arr.sort();

let meio = arr.length / 2;
let mediana;


if(arr.length % 2 != 0){
     mediana = arr[(arr.length - 1) / 2];
}else{
     mediana = (arr[meio - 1] + arr[meio]) / 2;
}
console.log("Array Ordenado: " + arr);
console.log("Meio: " + mediana);