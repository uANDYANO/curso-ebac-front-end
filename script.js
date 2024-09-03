const form = document.getElementById("myForm");
const mensagem = document.getElementById("mensagem");
const limparBtn = document.getElementById("limpar");

mensagem.style.display = "none"; // Esconde a mensagem inicialmente

form.addEventListener("submit", function(event) {
    mensagem.style.display = 'none'; // Esconde a mensagem antes da nova validação

    const campoA = parseFloat(document.getElementById("campoA").value); // Converte em formato número
    const campoB = parseFloat(document.getElementById("campoB").value); // Converte em formato número

    event.preventDefault(); // Impede o envio do formulário vazio

    if (campoB > campoA) {
        mensagem.innerHTML = "Formulário válido! Campo B é maior que Campo A.";
        mensagem.style.color = "green";
        mensagem.style.display = "block"; // Exibe a mensagem se válida
    } else {
        mensagem.innerHTML = "Formulário inválido! Campo B deve ser maior que Campo A.";
        mensagem.style.color = "red";
        mensagem.style.display = "block"; // Exibe a mensagem se inválida
    }
});

limparBtn.addEventListener("click", function() {
    document.getElementById("campoA").value = "";
    document.getElementById("campoB").value = "";
    mensagem.innerHTML = ""; // Limpa a mensagem
    mensagem.style.display = "none"; // Esconde a mensagem
});