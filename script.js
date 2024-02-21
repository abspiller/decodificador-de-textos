

var botaoCripto = document.querySelector('#btn-cripto');
var botaoDescripto = document.querySelector('#btn-descripto');
var botaoCopiar = document.querySelector('.btn-copiar-texto')
var textoResposta = document.querySelector('#saida-texto-criptografado')



// Função para criptografar o texto
function criptografar() {
var textoDigitado = document.getElementById('caixa-texto').value.toLowerCase();

 var textoModificado = textoDigitado.replace(/e/g, 'enter');
     textoModificado = textoModificado.replace(/i/g, 'imes');
     textoModificado = textoModificado.replace(/a/g, 'ai');
     textoModificado = textoModificado.replace(/o/g, 'ober');
     textoModificado = textoModificado.replace(/u/g, 'ufat');
    
    document.getElementById('texto-criptografado').innerText = textoModificado; 
}

// Função descriptografar
function descriptografar() {
  var texto = document.getElementById('caixa-texto').value;
  
  var textoOriginal = texto.replace(/ai/g, 'a');
      textoOriginal = textoOriginal.replace(/enter/g, 'e');
      textoOriginal = textoOriginal.replace(/imes/g, 'i');
      textoOriginal = textoOriginal.replace(/ober/g, 'o');
      textoOriginal = textoOriginal.replace(/ufat/g, 'u');

  document.getElementById('texto-criptografado').innerText = textoOriginal;
}

// Função para esconder a imagem e o texto abaixo 
function esconderImagem() {
  document.getElementById("saida-texto-imagem").style.display = "none";
}

// Função mostrar texto criptografado ou descriptografado
function mostrarResposta() {
  if (textoResposta.style.display === 'block') {
      textoResposta.style.display = 'none';
  } else {
      textoResposta.style.display = 'block'
  }
}

// Função mostrar botão copiar
function mostrarBotaoCopiar() {
  if (botaoCopiar.style.display === 'block') {
      botaoCopiar.style.display = 'none';
  } else {
      botaoCopiar.style.display = 'block'
   }
}

// Função copiar texto
function copiarTexto() {
  let textoCopiado = document.getElementById("texto-criptografado").value;
  if (navigator.clipboard.writeText(textoCopiado)) {
    document.getElementById('btn-copiar').textContent = "Copiado"
  };

  setInterval (function() {
    document.getElementById('btn-copiar').textContent = "Copiar"
  }, 3000);
}

// Evento de clique no botão criptografar com suas funções
botaoCripto.addEventListener("click", () => {
  criptografar() 
  esconderImagem()
  mostrarResposta()
  mostrarBotaoCopiar()  
});

// Evento de clique no botão descriptografar com suas funções
botaoDescripto.addEventListener("click", () => {
  descriptografar()
  esconderImagem()
  mostrarResposta()
  mostrarBotaoCopiar()
})