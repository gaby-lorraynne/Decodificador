var textarea = document.getElementById("content__principal__inserirTxt");
var contentLateral = document.getElementById("content__lateral");
var imagemPesquisa = document.getElementById("content__lateral__Imgpesquisa");
var inserirTexto = document.getElementById("inserirTexto");
var textoLateral = document.getElementById("textoLateral");

//Evento textarea
textarea.addEventListener("input", function(){

    // Exibe o texto inserido na div de conteúdo lateral
    inserirTexto.textContent = textarea.value;

    //Remover Imagem e texto inicial para inserir novo texto
    if(textarea.value.trim() !== ""){
        imagemPesquisa.style.display = "none";
        textoLateral.style.display = "none";
    }else{
        imagemPesquisa.style.display = "block";
        textoLateral.style.display = "block";
    }

    // Inserir botão de copiar depois

});