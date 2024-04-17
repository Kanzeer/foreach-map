const meuArray = [1, 2, 3, 4, 5];

meuArray.forEach(function(elemento, index, array, thisArgs) {
    console.log(`Index:${index}, Elemento:${elemento}, Array:${array}, thisArgs:${thisArgs}`);
});