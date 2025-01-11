
async function buscar(cep){
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    
    let response = await fetch(url); //suspende a execução até ter uma resposta
    if(response.ok){
        let data = await response.json();
        console.log("Rua:", data['logradouro']);
    }
}

function main(){
    let btn = document.querySelector("#carregar");

    btn.addEventListener('click', function(){    
        let txtCep = document.querySelector("#cep");
        let cep = txtCep.value;
        buscar(cep);
    });
}

main();