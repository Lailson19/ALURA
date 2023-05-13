const { edFolha, edGalho } = require("./baseDados/arrays");

function juntaLista(lista1, lista2) {
  let listaFinal = [];
  let posicaoAtualLista1 = 0;
  let posicaoAtualLista2 = 0;
  let atual = 0;

  while (
    posicaoAtualLista1 < lista1.length &&
    posicaoAtualLista2 < lista2.length
  ) {
    let produtoAtualLista1 = lista1[posicaoAtualLista1];
    let produtoAtualLista2 = lista2[posicaoAtualLista2];

    if (produtoAtualLista1.preco < produtoAtualLista2.preco) {
      listaFinal[atual] = produtoAtualLista1;
      posicaoAtualLista1++;
    } else {
      listaFinal[atual] = produtoAtualLista2;
      posicaoAtualLista2++;
    }
    atual++;
  }

  function esvaziaLista(lista, posicaoAtualLista) {
    while (posicaoAtualLista < lista.length) {
      listaFinal[atual] = lista[posicaoAtualLista];
      posicaoAtualLista++;
      atual++;
    }
  }

  esvaziaLista(lista1, posicaoAtualLista1);
  esvaziaLista(lista2, posicaoAtualLista2);

  return listaFinal;
}

console.log(juntaLista(edGalho, edFolha));
