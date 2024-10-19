function conversao(hora, minutos, segundos) {
    return (hora * 3600) + (minutos * 60) + segundos;
}

function horario(t1, t2) {
    let [h1, m1, s1] = t1.split(':').map(Number);
    let [h2, m2, s2] = t2.split(':').map(Number);

    let segundo1 = conversao(h1, m1, s1);
    let segundo2 = conversao(h2, m2, s2);

    return segundo2 - segundo1;
}

console.log(horario('13:30:10', '13:31:05'));