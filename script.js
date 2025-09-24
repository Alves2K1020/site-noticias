//exercicio1 mostrar nome
function mostrarNome(){
  let nome = prompt("qual é o seu nome");
  document.getElementById("mensagem").innerText ="ola," + nome + ". seja bem vindo!";
}
window.onload = function(){

   let nome = prompt("qual é o seu nome");
   document.getElementById("mensagem").innerText ="ola," + nome + ". seja bem vindo!";
}
//exercicio2
function somarNumeros(){
  let n1 = Number(prompt("digite o primeiro numero"));
  let n2 = Number(prompt("digite o segundo numero"));
  let soma = n1 + n2
  document.getElementById("mensagem2").innerText = "a soma e" + soma;
}
function subtrairNumeros(){
  let n1 = Number(prompt("digite o primeiro numero"));
  let n2 = Number(prompt("digite o segundo numero"));
  let subtração = n1 - n2;
  document.getElementById("mensagem3").innerText = "a subtração é " + subtração;
}
function multiplicarNumeros(){
  let n1 = Number(prompt("digite o primeiro numero"));
  let n2 = Number(prompt("digite o segundo numero"));
  let multiplicacao = n1 * n2;
  document.getElementById("mensagem4").innerText = "a multiplicação é " + multiplicacao;
}
function dividirNumeros(){
  let n1 = Number(prompt("digite o primeiro numero"));
  let n2 = Number(prompt("digite o segundo numero"));
  let divisao = n1 / n2;
  document.getElementById("mensagem5").innerText = "a divisão é " + divisao;
}
//exercicio cor
function mudarCor(){
//gera cor aleatoria
  let corAleatoria = "#" + Math.floor(Math.random() * 16777215).toString(16);
//aplicar cor de fundo
document.body.style.backgroundColor = corAleatoria;
//mostrar cor no console
console.log("nova cor " + corAleatoria);
document.getElementById("mensagem6").innerText = corAleatoria;
document.getElementById("mensagem6").style.color = corAleatoria;

}
//exercicio modo escuro
function modoEscuro(){
  let sections = document.querySelectorAll("section");
  sections.forEach(function(sec){
    sec.style.backgroundColor = "grey";
    sec.style.color = "white";
  });
   let buttons = document.querySelectorAll("button");
  buttons.forEach(function(but){
    but.style.backgroundColor = "navy";
  });
 
}

//exercicio modo claro
function modoClaro(){
  let sections = document.querySelectorAll("section");
  sections.forEach(function(sec){
    sec.style.backgroundColor = "#lightgrey";
    sec.style.color = "black";
  });
}
//let imagens = ["https://f.i.uol.com.br/fotografia/2023/02/10/167603544463e64574ab3a1_1676035444_3x2_md.jpg", "https://s2-g1.glbimg.com/ZhEOJZZO2zbB-BAYFcQCQEAvqv8=/0x0:1451x1200/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/L/d/rbPvBWT1qzEI6tBC7pUA/veiculos-roubados-foram-encontrados-em-area-de-mata-do-conjunto-toyama-em-mogi-das-cruzes.jpg","https://media.revide.com.br/cache/3c/ac/3caccb09dd119f61c3fd0e360abec51f","https://media.revide.com.br/cache/3c/ac/3caccb09dd119f61c3fd0e360abec51f.jpg","https://abcdoabc.com.br/wp-content/uploads/2024/04/motos-recuperadas.jpeg","https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh-5iIVk1LesGFXH6YHiwua4Fd2kudRj-025lgTd37mHavbAdJf6ymIWCeLjjPASyTElhWHyBqj-PTFStTAcovdE1ktkTvXkZRMXBmYWYCSqt7PRQsUPzBPxPHd0foaPCcK6BrJgMbWlmFpuvc24MHj2rAg5a_Q-guIP4CnIzIro7Fd737tludKqMpoNemp/s1000/motos-roubadas-e-com-sinais-de-adulteracao-sao-encontradas-em-garagem-na-bahia.gif"];
let indice = 0;
let intervalo;
let imagens1 = ["https://placehold.co/600x400", "https://placehold.co/800x600", "https://placehold.co/300x200"];

function trocarImagens(){
  indice++;
  if(indice >= imagens1.length){
    indice = 0;
  }
  document.getElementById("imagem").src = imagens1[indice];
  // console.log(imagens);
}
function iniciaTroca(){
  if(!intervalo){
  intervalo = setInterval(trocarImagens, 1000);
}
}

//imagens carrossel
let index = 0;
const slides = document.getElementById("slides");
const imagens = document.querySelectorAll(".slides img");
const total = imagens.length;

function trocarDeImagem(){
  index++;
  slides.style.transform = `translateX(-${index * 400}px)`;
  if(index === total){
  setTimeout(() =>{
  slides.style.transition ="none";
  index = 0;
  slides.style.transform ="tranlateX(0)"
  setTimeout(() =>{
    slides.style.transition ="transform 1s ease-in-out";
  },50);
},1000); 
}
}
setInterval(trocarDeImagem,5000);