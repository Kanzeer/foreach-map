let numerosArray = [1, 2, 3];
let resultado = numerosArray.map(function(numero) {
    return numero * 2;
}).map(function(numero) {
    return numero + 1;
});
console.log(resultado); //saida: [3, 5, 7]