function menorValor(arrProdutos, posicao){
    let maisBarata = posicao;
    
    for (let atual = posicao; atual < arrProdutos.length; atual++){
        if (arrProdutos[atual].preco < arrProdutos[maisBarata].preco){
            maisBarata = atual;
        }
    }
    return maisBarata;
}

module.exports = menorValor;
