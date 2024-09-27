// Obtém o elemento canvas do HTML onde o jogo será desenhado
const canvas = document.getElementById('gameCanvas');
// Obtém o contexto 2D do canvas para desenhar formas e texto
const ctx = canvas.getContext('2d');

// Tamanho de cada bloco da grade, que será usado para a cobra e a comida
const gridSize = 20;
// Calcula o número de blocos que cabem no canvas com base no tamanho da grade
const tileCount = canvas.width / gridSize;
////////////////////////////////////////////////////////////////////////
//VARIAVEIS DO GAME
// Inicializa a cobra como um array contendo a posição inicial da cabeça
let snake = [{ x: 10, y: 10 }];
// Inicializa a comida em uma posição específica
let food = { x: 15, y: 15 };
// Inicializa a velocidade da cobra, que começará parada
let velocity = { x: 0, y: 0 };
// Inicializa a pontuação do jogador
let score = 0;

//CONTROLE DA COBRA
// Adiciona um evento que escuta as teclas de seta pressionadas pelo usuário


// Função para atualizar a posição da cobra e verificar colisões


// Função para desenhar a cobra, a comida e a pontuação no canvas


// Função principal do jogo que mantém o loop de atualização e desenho
function gameLoop() {
    update(); // Atualiza a posição da cobra e verifica colisões
    draw();   // Desenha a cobra e a comida no canvas
    setTimeout(gameLoop, 100); // Chama gameLoop novamente após 100 milissegundos para controlar a velocidade do jogo
}

// Inicia o jogo chamando a função gameLoop
gameLoop();
