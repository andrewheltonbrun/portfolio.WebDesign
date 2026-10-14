/* 1. Selecionando os elementos HTML */
const titulo = document.getElementById("titulo");
const mensagem = document.getElementById("mensagem");
const resultado = document.getElementById("resultado");

const botaoMensagem = document.getElementById("botaoMensagem");
const botaoCor = document.getElementById("botaoCor");
const botaoData = document.getElementById("botaoData");
const botaoRestaurar = document.getElementById("botaoRestaurar");

/* 2. Alterando o texto ao clicar */
botaoMensagem.addEventListener("click", function () {
    titulo.textContent = "Você está aprendendo JavaScript!";
    mensagem.textContent =
        "Com JavaScript, podemos criar páginas dinâmicas e interativas.";

    resultado.textContent = "Mensagem alterada com sucesso!";
});

/* 3. Alterando a cor da página */
botaoCor.addEventListener("click", function () {
    const corAtual = document.body.style.backgroundColor;

    if (corAtual === "rgb(255, 243, 224)") {
        document.body.style.backgroundColor = "#F0F4F8";
        resultado.textContent = "Voltamos à cor original!";
    } else {
        document.body.style.backgroundColor = "#FFF3E0";
        resultado.textContent = "A cor de fundo foi alterada!";
    }
});

/* 4. Exibindo data e hora */
botaoData.addEventListener("click", function () {
    const agora = new Date();

    resultado.textContent =
        "Data e hora: " + agora.toLocaleString("pt-BR");
});

/* 5. Restaurando o conteúdo original */
botaoRestaurar.addEventListener("click", function () {
    titulo.textContent = "Olá! Seja bem-vindo(a)!";
    mensagem.textContent =
        "Clique nos botões abaixo e veja a mágica acontecer.";

    document.body.style.backgroundColor = "#F0F4F8";
    resultado.textContent = "A página foi restaurada!";
});