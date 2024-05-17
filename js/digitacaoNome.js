var nome = "Lucas Campos";
var atraso = 200;
var textoElemento = document.querySelector(".apresentacao__conteudo__titulo");


var contadorDeLetras = 0;
function escreverTexto() {
  if (contadorDeLetras < nome.length) {
    textoElemento.textContent += nome.charAt(contadorDeLetras);
    contadorDeLetras++;
    
    setTimeout(escreverTexto, atraso);
  }
}

escreverTexto();