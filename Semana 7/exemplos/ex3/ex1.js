function sayHello(e){
    console.log("Oi, eu sou o " + e.target.textContent + " !");
}

const btn1 = document.querySelector('#btn1');

btn1.addEventListener('click', sayHello);