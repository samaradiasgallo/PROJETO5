let palavra;
let imagem;
let musica;

function preload(){
  imagem = loadImage("imagem.png");
  musica = loadSound("musica.mp3");
}


function setup() {
  createCanvas(600, 600);
  palavra = empada();
  musica.loop();
}

function draw() {
  background("violet");
  image(imagem,0,0,600,600);
  batata();
  coxinha();
  empada();
}

function batata(){
  fill("lightblue");
  textSize(70);
  textAlign(CENTER,CENTER);
}

function coxinha(){
  let maximo = width;
  let minimo = 0;
  let quantidade = map(mouseX, 0, width, 1, palavra.length);
  let inicio = palavra.substring(0, quantidade);
  text(inicio, 300, 300);
}

function empada(){
  let palavras = ["coxinha", "batata", "vô nada", "empada", "isabelle"];
return random(palavras);
}


