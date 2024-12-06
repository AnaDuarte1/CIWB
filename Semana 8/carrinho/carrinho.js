    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const produtos = document.querySelectorAll('.adicionar');
    const tabelaCarrinho = document.getElementById('itens-carrinho');
    const totalElement = document.getElementById('total');
    const quantidadeElement = document.getElementById('quantidade-itens');
    const esvaziarBtn = document.getElementById('esvaziar');

    function atualizarCarrinho() {
        tabelaCarrinho.innerHTML = '';

        let total = 0;
        let quantidade = 0;

        for (let i = 0; i < carrinho.length; i++) {
            const item = carrinho[i];

            const tr = document.createElement('tr');
            const tdNome = document.createElement('td');
            const tdPreco = document.createElement('td');
            const tdQuantidade = document.createElement('td');
            const tdAcao = document.createElement('td');
            const inputQuantidade = document.createElement('input');
            const btnRemover = document.createElement('button');

            tdNome.textContent = item.nome;
            tdPreco.textContent = 'R$' + item.preco;

            inputQuantidade.value = item.quantidade;
            inputQuantidade.dataset.index = i;
            inputQuantidade.classList.add('quantidade');

            btnRemover.textContent = 'Remover';
            btnRemover.dataset.index = i;
            btnRemover.classList.add('remover');

            tdQuantidade.appendChild(inputQuantidade);
            tdAcao.appendChild(btnRemover);

            tr.appendChild(tdNome);
            tr.appendChild(tdPreco);
            tr.appendChild(tdQuantidade);
            tr.appendChild(tdAcao);

            tabelaCarrinho.appendChild(tr);

            total += item.preco * item.quantidade;
            quantidade += item.quantidade;
        }

        totalElement.textContent = total;
        quantidadeElement.textContent = quantidade;

        
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
    }

    function adicionarAoCarrinho(nome, preco) {
        let itemExistente = null;

        for (let i = 0; i < carrinho.length; i++) {
            if (carrinho[i].nome === nome) {
                itemExistente = carrinho[i];
                break;
            }
        }

        if (itemExistente) {
            itemExistente.quantidade++;
        } else {
            carrinho.push(
                {   nome, 
                    preco, 
                    quantidade: 1 
                });
        }

        atualizarCarrinho();
    }

    function removerDoCarrinho(index) {
        carrinho.splice(index, 1);
        atualizarCarrinho();
    }

    function alterarQuantidade(index, quantidade) {
        carrinho[index].quantidade = parseInt(quantidade, 10);
        atualizarCarrinho();
    }

    for (let i = 0; i < produtos.length; i++) {
        produtos[i].addEventListener('click', () => {
            const nome = produtos[i].getAttribute('data-nome');
            const preco = produtos[i].getAttribute('data-preco');
            adicionarAoCarrinho(nome, preco);
        });
    }

    tabelaCarrinho.addEventListener('click', (evento) => {
        if (evento.target.classList.contains('remover')) {
            const index = evento.target.getAttribute('data-index');
            removerDoCarrinho(index);
        }
    });

    tabelaCarrinho.addEventListener('input', (evento) => {
        if (evento.target.classList.contains('quantidade')) {
            const index = evento.target.getAttribute('data-index');
            const quantidade = evento.target.value;
            alterarQuantidade(index, quantidade);
        }
    });

    esvaziarBtn.addEventListener('click', () => {
        carrinho.length = 0;
        atualizarCarrinho();
    });

    atualizarCarrinho();

