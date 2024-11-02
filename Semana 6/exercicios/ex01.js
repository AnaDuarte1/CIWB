 const data = {
        "logradouro": "Avenida Padre Francisco Sales Colturato",
        "bairro": "Centro",
        "cidade": "Araraquara",
        "estado": "São Paulo",
    };

    let logradouro = document.querySelector('#logradouro');
    let bairro = document.querySelector('#bairro');
    let cidade = document.querySelector('#cidade');
    let estado = document.querySelector('#estado');

preencher();

function preencher(){
    logradouro.value = data.logradouro;
    bairro.value = data.bairro;
    cidade.value = data.cidade;
    estado.value = data.estado;  
}
