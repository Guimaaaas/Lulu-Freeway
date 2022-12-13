// Variaveis Ator
let xAtor = 100;
let yAtor = 366;
let comprimentoAtor = 70;
let alturaAtor = 40;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor,xAtor,yAtor,comprimentoAtor,alturaAtor);
}

function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor -= 2;
  }
  if(keyIsDown(DOWN_ARROW)){
    if(yAtor<370){
      yAtor +=2;
    }
  }
  if(keyIsDown(RIGHT_ARROW)){
    if(xAtor<450){
      xAtor +=2;
      imagemDoAtor = imagemDoAtorDireita;
    }
  }
    if(keyIsDown(LEFT_ARROW)){
      if(xAtor>-20){
        xAtor -=2;
        imagemDoAtor = imagemDoAtorEsquerda;
      }
  }
}

function verificaColisao(){
  for(let i = 0; i < imagensDosCarros.length; i++){
    colisao = collideRectRect(xCarros[i], yCarros[i], comprimentoCarros, alturaCarros, xAtor, yAtor, comprimentoAtor-27, alturaAtor-15);
  
    if(colisao){
      colidiu();
      morte.play();
    }
  }
}

function colidiu(){
  yAtor = 366;
  meusPontos = 0;
}

function incluirPontos(){
  textAlign(CENTER);
  textSize(20);
  fill(color(255,240,60))
  text(meusPontos,width/5,25)
}

function pontuar(){
  if(yAtor < 0){
    meusPontos++;
    yAtor = 366;
    risadinha.play();
  }
}