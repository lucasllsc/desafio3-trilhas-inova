var atraso = 200;
var textoElemento = document.querySelector(".apresentacao__conteudo__titulo");
let titulo = textoElemento.textContent;
textoElemento.textContent = '';

var contadorDeLetras = 0;
function escreverTexto() {
  if (contadorDeLetras < titulo.length) {
    textoElemento.textContent += titulo.charAt(contadorDeLetras);
    contadorDeLetras++;
    
    setTimeout(escreverTexto, atraso);
  }
}

escreverTexto();