const livros = require('./baseDados/listalivros');
const troca = require('./modulos/trocaValor');
const menorValor = require('./modulos/menorValor');

livros.forEach((_, indice) => {
    let menor = menorValor(livros, indice);
    troca(livros, menor);
})

console.log(livros);