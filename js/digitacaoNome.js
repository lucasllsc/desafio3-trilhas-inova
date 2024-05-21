var atraso = 100;
var textoElemento = document.querySelector(".digitacao");
let titulo = textoElemento.textContent;
textoElemento.textContent = '';
var palavras = titulo.split(" ");

var contadorDeLetras = 0;
var palavraAtual = 0;

function escreverTexto() {
  if (palavraAtual < palavras.length){
    if (contadorDeLetras < palavras[palavraAtual].length) {
      if (palavraAtual === palavras.length - 1) {
        textoElemento.innerHTML += `<span class="titulo-destaque">${palavras[palavraAtual].charAt(contadorDeLetras)}</span>`;
      } else {
        textoElemento.innerHTML += palavras[palavraAtual].charAt(contadorDeLetras);
      }
      contadorDeLetras++;
      setTimeout(escreverTexto, atraso);
    } else {
      textoElemento.innerHTML += " ";
      palavraAtual++;
      contadorDeLetras = 0;
      setTimeout(escreverTexto, atraso);
    }
  }
  
}

escreverTexto();