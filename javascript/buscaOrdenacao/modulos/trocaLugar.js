function trocaLugar(array, de, para) {
  const elen1 = array[de];
  const elen2 = array[para];

  array[para] = elen1;
  array[de] = elen2;
}

module.exports = trocaLugar;