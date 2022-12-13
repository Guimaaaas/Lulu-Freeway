// Imagens
let imagemDaEstrada;
let imagemDoAtor;
let imagemDoCarro;
let imagemDoCarro2;
let imagemDoCarro3;

// Sons
let trilha;
let morte;
let risadinha;

function preload(){
  imagemDaEstrada = loadImage("imagens/estrada.png");
  imagemDoAtorDireita = loadImage("imagens/ator-direita.png");
  imagemDoAtorEsquerda = loadImage("imagens/ator-esquerda.png");
  imagemDoAtor = imagemDoAtorDireita;
  imagemDoCarro = loadImage("imagens/carro-1.png");
  imagemDoCarro2 = loadImage("imagens/carro-2.png");
  imagemDoCarro3 = loadImage("imagens/carro-3.png");
  imagensDosCarros = [imagemDoCarro,imagemDoCarro2,imagemDoCarro3, imagemDoCarro,imagemDoCarro2,imagemDoCarro3];
  trilha = loadSound("sons/trilha.mp3");
  morte = loadSound("sons/lulu-gemidinho.mp3");
  risadinha = loadSound("sons/risada-lulu-lol.mp3");
  
}