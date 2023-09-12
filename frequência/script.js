// Função para registrar a presença
function registrarPresença() {
    // Pega os dados do formulário
    const nome = document.querySelector("input[name='nome']").value;
    const matrícula = document.querySelector("input[name='matrícula']").value;

    // Incrementa a contagem de presenças
    const contagem = document.querySelector("#contagem");
    contagem.innerHTML = parseInt(contagem.innerHTML) + 1;
}

// Chama a função ao clicar no botão "Registrar presença"
document.querySelector("input[type='submit']").addEventListener("click", registrarPresença);


// limpar preseça
// Função para limpar a contagem de presenças
function limparContagem() {
    const contagem = document.querySelector("#contagem");
    contagem.innerHTML = 0;
}

// Chama a função ao clicar no botão "Limpar"
document.querySelector("button").addEventListener("click", limparContagem);



