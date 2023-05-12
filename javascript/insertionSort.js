const livros = require('./baseDados/listalivros');
const troca = require('./modulos/trocaValor');

function insertionSort(lista){
    lista.forEach((_, indice) => {
        while(indice > 0 && lista[indice].preco < lista[indice - 1].preco){
            troca(lista, indice);
            indice--;
        }
    })    
    console.log(lista);
}

insertionSort(livros);