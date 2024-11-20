function myListener(e) {
    const div = e.target.parentElement;
    
    const p = document.createElement('p');
    p.textContent = 'Olá, mundo!';
    div.appendChild(p);
}

const btn = document.querySelector('#btn'); 
btn.addEventListener('click', myListener);  
