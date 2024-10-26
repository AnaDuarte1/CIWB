let cliente = {
    nome: 'Ana',
    email: 'anaberocha@hotmail.com',
    isAdmin: true,
    dizeroi: function(){
        console.log("oi!Eu sou a", this.nome, '!');
    }

};



let produtos = [
    {
        nome: 'Sabão',
        preco: 2.48
    },
    {
        nome: 'Arroz',
        preco: 40.00
    },
    {
        nome: 'Café',
        preco: 20.00
    },
];

/* Alternativa 1:

let nome = [];
for(let prod of produtos){
  nome.push(prod.nome);
}

console.log(nome)
Saída: Array(3) [ "Sabão", "Arroz", "Café" ]
*/

/* Alternativa 2:
let nome = produtos.map(p => p.nome);
*/ 


/* Produtos que custam acima de 10.00
let caros = [];
for(let prod of produtos){
    if(prod.preco > 10){
        caros.push(prod);
    }
}
*/

/* Alternativa 2
let caros = produtos.filter(p => p.preco > 10);
*/

