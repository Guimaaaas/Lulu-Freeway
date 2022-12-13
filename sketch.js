function setup() {
  createCanvas(500, 400);
  trilha.loop();
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoInicial();
  verificaColisao();
  pontuar();
  incluirPontos();
}
