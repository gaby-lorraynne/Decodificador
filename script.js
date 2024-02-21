var textarea = document.getElementById("content__principal__inserirTxt");
var contentLateral = document.getElementById("content__lateral");
var imagemPesquisa = document.getElementById("content__lateral__Imgpesquisa");
var inserirTexto = document.getElementById("inserirTexto");
var textoLateral = document.getElementById("textoLateral");
var btnCopiar = document.getElementById("content__principal__btns__copiar");

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
    if(textarea.value.trim() !== ""){
        btnCopiar.style.display = "block"
    }else{
        btnCopiar.style.display = "none";
    }

});


// Criptografar
function criptografar(entrada){
    const saida = entrada
    .replaceAll("e", "enter")
    .replaceAll("i","imes")
    .replaceAll("a","ai")
    .replaceAll("o","ober")
    .replaceAll("u","ufat");

    return saida;
}

// Criptografar
function descriptografar(entrada){
    const saida = entrada
    .replaceAll("enter", "e")
    .replaceAll("imes","i")
    .replaceAll("ai","a")
    .replaceAll("ober","o")
    .replaceAll("ufat","u");

    return saida;
}

let test = textarea;
console.log(criptografar(test));