// Selecionando o botão e adicionando um ouvinte de evento de clique
const toggleButton = document.getElementById('toggleButton');
toggleButton.addEventListener('click', toggleBackground);

// Função para alternar o fundo entre preto e branco
function toggleBackground() {
    const body = document.body;

    if (body.style.backgroundColor === 'black') {
        body.style.backgroundColor = 'white';
    } else {
        body.style.backgroundColor = 'black';
    }
}