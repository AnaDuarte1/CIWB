const base = 37;
let esquerdos = new Array(8).fill(0);
let direitos = new Array(8).fill(0);

const tamanhos = [38, 42, 39, 40, 38, 40, 37, 44, 37, 42, 41, 44, 37, 42];
const pes = ['E', 'E', 'E', 'D', 'D', 'D', 'E', 'D', 'D', 'D', 'E', 'E', 'E', 'D'];

/* processando entradas */
for (let i = 0; i < tamanhos.length; i++) {
    const n = tamanhos[i];
    const pe = pes[i];

    const pos = n - base;
    if (pe === 'E') {
        esquerdos[pos]++;
    } else {
        direitos[pos]++;
    }
}

/* gerando saída */
for (let i = 0; i < direitos.length; i++) {
    const min = Math.min(direitos[i], esquerdos[i]);
    if (min > 0) {
        const num = base + i;
        console.log(num, min);
    }
}
