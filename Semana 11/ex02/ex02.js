
async function buscar(nome){
    const url = `https://api.github.com/users/${nome}`;
    
    let response = await fetch(url); //suspende a execução até ter uma resposta
    
    const usuario = document.querySelector("#nomeUsuario");
    const qtd = document.querySelector("#qtd");

    if(response.ok){
        let data = await response.json();

        usuario.textContent = data.login;
        img.src = data['avatar_url'];
        
        const responseRe = await fetch(data['repos_url']);

        if(responseRe.ok){
            const reposData = await responseRe.json();
            qtd.textContent = reposData.length;
        }
    }

    
}

function main(){
    let btn = document.querySelector("#carregar");

    btn.addEventListener('click', function(){    
        let txtNome = document.querySelector("#nome");
        let nome = txtNome.value;
        buscar(nome);
    });
}

main();