// Seleciona os elementos da página
const mensagem = document.getElementById("mensagem");
const botaoTexto = document.getElementById("botaoTexto");
const botaoCor = document.getElementById("botaoCor");
const botaoAdicionar = document.getElementById("botaoAdicionar");
const botaoRemover = document.getElementById("botaoRemover");
const areaElementos = document.querySelector("#areaElementos");

// Função para alterar o texto
function alterarTexto() {
    mensagem.textContent = "O texto foi alterado com JavaScript!";
}

// Função para alterar a cor do texto
function alterarCor() {
    mensagem.style.color =
        mensagem.style.color === "blue" ? "#222222" : "blue";
}

// Função para adicionar um elemento
function adicionarElemento() {
    const novoElemento = document.createElement("p");

    novoElemento.textContent = "Novo elemento adicionado ao DOM!";
    novoElemento.classList.add("elemento");

    areaElementos.appendChild(novoElemento);
}

// Função para remover o último elemento
function removerElemento() {
    const ultimoElemento = areaElementos.lastElementChild;

    if (ultimoElemento) {
        areaElementos.removeChild(ultimoElemento);
    } else {
        alert("Não há elementos para remover!");
    }
}

// Eventos de clique
botaoTexto.addEventListener("click", alterarTexto);
botaoCor.addEventListener("click", alterarCor);
botaoAdicionar.addEventListener("click", adicionarElemento);
botaoRemover.addEventListener("click", removerElemento);