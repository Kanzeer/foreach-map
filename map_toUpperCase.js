//Array de springs representando personagens de jogos
let personagens = ['batman', 'coringa', 'kratos', 'sonic'];

// Usando map() para criar um novo array convertendo os nomes em letras maiúsculas
let nomeMaiusculos = personagens.map(function(nome) {
    return nome.toUpperCase();
});

console.log(nomeMaiusculos);