let opcao = 'audi';

function carregar() {
    let img = document.createElement('img');
    img.src = opcao + '.jpg';
    img.height = 200;

    let div = document.querySelector('#mostrar');
    div.innerHTML = '';
    div.appendChild(img);
}

function mostrar() {
        let select = document.getElementById("marca");
        opcao = select.value; 
        document.getElementById("selecao").innerHTML = "You selected: " + opcao;
        carregar();  
}
    
document.getElementById("marca").addEventListener('change', mostrar);

carregar();
