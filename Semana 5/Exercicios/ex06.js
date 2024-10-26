let produtos = [
    {
        id: 1,
        nome: 'Caneta BIC Cristal 0.7mm',
        preco: 6.60,
        desconto: 10
    },
    {
        id: 2,
        nome: 'Caneta Esferográfica Trilux',
        preco: 5.50,
        desconto: 0
    },
    {
        id: 3,
        nome: 'Lapiseira 0.5mm Pentel',
        preco: 27.90,
        desconto: 15
    },
    {
        id: 4,
        nome: 'Grafite Fino 0.5mm HB 2 Faber-Castell',
        preco: 10.90,
        desconto: 5
    },
    {
        id: 5,
        nome: 'Pincel quadro branco recarregável',
        preco: 9.80,
        desconto: 0    
    },
];

let total = 0;
let totalDesc = 0;

for(let prod of produtos){        
    
    total += prod.preco;

    if(prod.desconto > 0){
        totalDesc += prod.preco - (prod.preco * (prod.desconto/100));
    }else{
        totalDesc += prod.preco
    }
}

console.log(total);
console.log(totalDesc);


