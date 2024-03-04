var textarea = document.getElementById("content__principal__inserirTxt");
var contentLateral = document.getElementById("content__lateral");
var imagemPesquisa = document.getElementById("content__lateral__Imgpesquisa");
var inserirTexto = document.getElementById("inserirTexto");
var textoLateral = document.getElementById("textoLateral");
var btnCopiar = document.getElementById("content__principal__btns__copiar");
var textoOriginal = "";

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
        btnCopiar.style.display = "block";
    } else {
        btnCopiar.style.display = "none";
    }
});


function criptografarTexto() {
    // Obter o texto do textarea
    var entrada = textarea.value;

    // Armazenar o texto original
    textoOriginal = entrada;

    // Chamar a função de criptografia
    var saida = criptografar(entrada);

    // Exibir o texto criptografado de volta no textarea
    inserirTexto.textContent = textarea.value = saida;

    // Atualizar o textarea com o texto original
    textarea.value = textoOriginal;
}

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

function descriptografarTexto() {
    // Obter o texto do textarea
    var entrada = textarea.value;

    // Armazenar o texto original
    textoOriginal = entrada;

    // Chamar a função de criptografia
    var saida = descriptografar(entrada);

    // Exibir o texto criptografado de volta no textarea
    inserirTexto.textContent = textarea.value = saida;

    // Atualizar o textarea com o texto original
    textarea.value = textoOriginal;
}

// descriptografar
function descriptografar(entrada){
    const saida = entrada
    .replaceAll("enter", "e")
    .replaceAll("imes","i")
    .replaceAll("ai","a")
    .replaceAll("ober","o")
    .replaceAll("ufat","u");

    return saida;
}
