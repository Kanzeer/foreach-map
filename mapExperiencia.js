//Array de números representando os níveis dos jogadores
let niveisJogadores = [1, 5, 10, 15, 20];

//Função para calcular a experiência para o próximo nível
function calcularExperienciaProximoNivel(nivel) {
    //Experiência necessária para o próximo nível
    const EXPERIENCIA_BASE = 100;
    //Experiência adicional por nível
    const EXPERIENCIA_ADICIONAL_POR_NIVEL = 50;

    //Calcula a experiência necessária com base no nível
    return EXPERIENCIA_BASE + nivel * EXPERIENCIA_ADICIONAL_POR_NIVEL;
}

/* Usando map() para criar um novo array contendo a experiência necessária
para o proximo nível de cada jogador */
let experienciaProximoNivel = niveisJogadores.map(function(nivel) {
    return calcularExperienciaProximoNivel(nivel);
});

console.log(experienciaProximoNivel);