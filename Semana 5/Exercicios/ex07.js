let alunos = [
    { idade: 15, altura: 1.60 },
    { idade: 16, altura: 1.65 },
    { idade: 14, altura: 1.55 },
    { idade: 17, altura: 1.70 },
    { idade: 15, altura: 1.68 },
    { idade: 16, altura: 1.72 },
    { idade: 14, altura: 1.58 },
    { idade: 18, altura: 1.75 },
    { idade: 16, altura: 1.62 },
    { idade: 15, altura: 1.63 },
    { idade: 17, altura: 1.74 },
    { idade: 14, altura: 1.50 },
    { idade: 15, altura: 1.66 },
    { idade: 16, altura: 1.71 },
    { idade: 14, altura: 1.57 },
    { idade: 18, altura: 1.78 },
    { idade: 17, altura: 1.80 },
    { idade: 16, altura: 1.64 },
    { idade: 15, altura: 1.61 },
    { idade: 14, altura: 1.52 },
    { idade: 17, altura: 1.69 },
    { idade: 15, altura: 1.67 },
    { idade: 16, altura: 1.73 },
    { idade: 14, altura: 1.59 },
    { idade: 18, altura: 1.77 },
    { idade: 17, altura: 1.76 },
    { idade: 16, altura: 1.63 },
    { idade: 15, altura: 1.65 },
    { idade: 14, altura: 1.54 },
    { idade: 18, altura: 1.87 },
    { idade: 17, altura: 1.71 },
    { idade: 16, altura: 1.68 },
    { idade: 15, altura: 1.66 }
  ];

    let media = 0;
    let mediaT = 0;

  for(let a of alunos){        
    media += a.altura;
}

media = media/30;
let acimaMedia = alunos.filter(a => a.altura > media);

console.log('Media de altura:' + media + '\nQuantidade de alunos: ' + acimaMedia.length);


  