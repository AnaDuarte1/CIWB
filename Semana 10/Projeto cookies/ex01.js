function horaAtual() {

    let hora = new Date().toLocaleTimeString();
  
    console.log(hora);
    
  

    document.cookie = "username=Ana";
  }

  horaAtual();