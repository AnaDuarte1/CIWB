function horario(hora,minutos,segundos){
    hora *= 3600;
    minutos *= 60;

    let totalS = hora + minutos + segundos;

    console.log("Total de segundos:", totalS);
}

horario(1,40,60);