function remover() {
    const ps = document.querySelectorAll('p');
    
    for (let p of ps) {
        p.classList.add('remover');
    }
}

let btn = document.querySelector('button');
btn.addEventListener('click', remover);
