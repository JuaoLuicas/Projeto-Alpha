/*
Objetivo 1 - quando o usuário clicar no botão de ver o trailer, a modal com o vídeo do trailer irá se abrir.
- passo 1 - dar um jeito de pegar o elemento que representa o botão na tela usando o js.
- passo 2 - dar um jeito de identificar quando o usuário clicar no botão.
- passo 3 - dar um jeito de pegar o elemento da modal no js.
- passo 4 - abrir modal na tela.
Objetivo 2 - quando o usuário clicar no botão X a modal deverá se fechar. 
- passo 1 - dar um jeito de pegar o elemento de fechar modal usando js.
- passo 2 - dar um jeito de identificar quando o usuário clicar no X.
- passo 3 - fechar a modal.
*/

//Objetivo 1 - quando o usuário clicar no botão de ver o trailer, a modal com o vídeo do trailer irá se abrir.
//- passo 1 - dar um jeito de pegar o elemento que representa o botão na tela usando o js.
const botaoTrailer = document.querySelector(".botao-trailer");

//- passo 3 - dar um jeito de pegar o elemento da modal no js.
const modal = document.querySelector(".modal");

const video = document.getElementById("video");

const linkDoVideo = video.src;

function alternarModal () {
    modal.classList.toggle("aberto");
};

//- passo 2 - dar um jeito de identificar quando o usuário clicar no botão.
botaoTrailer.addEventListener("click", () => {
    //- passo 4 - abrir modal na tela.
    alternarModal()
    video.setAttribute("src", linkDoVideo)
});

//Objetivo 2 - quando o usuário clicar no botão X a modal deverá se fechar. 
//- passo 1 - dar um jeito de pegar o elemento de fechar modal usando js.
const botaoFecharModal = document.querySelector(".fechar-modal");
//- passo 2 - dar um jeito de identificar quando o usuário clicar no X.
botaoFecharModal.addEventListener("click", () => {
//- passo 3 - fechar a modal.
    alternarModal()
    video.setAttribute("src", "");
});
