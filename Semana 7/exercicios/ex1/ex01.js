let botao = document.querySelector('#btn-carregar');
botao.addEventListener('click', );

document.getElementById('marca').addEventListener("change", function(event) {
    let opcao = event.target.value; 
    let img = document.createElement('img');
    img.src = opcao + '.jpg';
    img.height = 200;

    let div = document.querySelector('#main');
    div.appendChild(img);
});
