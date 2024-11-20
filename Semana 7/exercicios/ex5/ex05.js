function removerLinha(e) {

    const td = e.target.parentElement;
    const tr = td.parentElement;

    tr.remove();
}

let links = document.querySelectorAll("#tabela a");

for (let link of links) {
    link.addEventListener('click', removerLinha);
}
