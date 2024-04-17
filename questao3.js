//Questão 03 – Crie um algoritmo usando o método forEach() para encontrar o maior número em um array de números?

let array = [1, 2, 3, 4, 5];
let maiorNumero = 0;

array.forEach(function(num) {
    if (num > maiorNumero){
        maiorNumero = num
    } 
}) 
console.log(maiorNumero);
