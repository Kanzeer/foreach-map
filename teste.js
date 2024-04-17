let array = [1, 2, 3, 4, 5];
array.forEach(function(num, indice, arr) {
    arr[indice] = num + 1;
});
console.log(array)