// Variaveis Carros
let xCarros = [600,600,600,600,600,600];
let yCarros = [38,150,95,210,320,260];
let comprimentoCarros = 70;
let alturaCarros = 40;
let velocidadesCarros = [5,6,10,8,3,4];

function mostraCarro(){
  for(let i = 0; i<imagensDosCarros.length; i++){         image(imagensDosCarros[i],xCarros[i],yCarros[i],comprimentoCarros,alturaCarros);
  }
}

function movimentaCarro(){
  for(let i = 0; i < imagensDosCarros.length; i++){
    xCarros[i] -= velocidadesCarros[i];
  }
}

function voltaPosicaoInicial(){
  for(let i = 0; i < imagensDosCarros.length; i++){
    if(passouTodaATela(xCarros[i])){
      xCarros[i] = 600;
    }
  }
}

function passouTodaATela(xCarro){
  return xCarro < -50
}