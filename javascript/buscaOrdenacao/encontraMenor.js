const { listaLivros } = require("./baseDados/arrays");
const trocaLugar = require("./modulos/trocaLugar");

function encontraMenores(pivo, array) {
  let menores = 0;

  for (let atual = 0; atual < array.length; atual++) {
    let produtoAtual = array[atual];
    if (produtoAtual.preco < pivo.preco) {
      menores++;
    }
  }

  trocaLugar(array, array.indexOf(pivo), menores);
  return array;
}

function divideNoPivo(array) {
  let pivo = array[Math.floor(array.length / 2)];
  encontraMenores(pivo, array);
  let valorMenores = 0;

  for (let analisando = 0; analisando < array.length; analisando++) {
    let atual = array[analisando];

    if (atual.preco <= pivo.preco && atual !== pivo) {
      trocaLugar(array, analisando, valorMenores);
      valorMenores++;
    }
  }
  return array;
}

// console.log(divideNoPivo(listaLivros));
console.log(encontraMenores(listaLivros[2], listaLivros));
