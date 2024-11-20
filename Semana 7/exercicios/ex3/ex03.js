function mostrar_id(e) {
    const btn = e.target;
    console.log(btn.id);  
}

const buttons = document.querySelectorAll('button');

for (let button of buttons) {
    button.addEventListener('click', mostrar_id); 
}