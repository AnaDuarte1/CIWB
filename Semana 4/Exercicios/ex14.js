const tamanhos = [38, 42, 39, 40, 38, 40, 37, 44, 37, 42, 41, 44, 37, 42];
const pes = ['E', 'E', 'E', 'D', 'D', 'D', 'E', 'D', 'D', 'D', 'E', 'E', 'E', 'D'];

function organizacao(tamanhos, pes) {
    let contagem = {};

    for (let i = 0; i < tamanhos.length; i++) {
        const tamanho = tamanhos[i];
        const pe = pes[i].toUpperCase();

        if (!contagem[tamanho]) {
            contagem[tamanho] = { E: 0, D: 0 };
        }

        contagem[tamanho][pe]++;
    }

    let resultado = [];
    for (let tamanho in contagem) {
        const pares = Math.min(contagem[tamanho]['E'], contagem[tamanho]['D']);
        if (pares > 0) {
            resultado.push(`${tamanho} ${pares}`);
        }
    }

    return resultado;
}

const resultado = organizacao(tamanhos, pes);
console.log(resultado.join('\n'));
