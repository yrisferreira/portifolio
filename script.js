// Modal de solicitação de visualização
const modal = document.getElementById('modal-solicitacao');
const closeModal = document.getElementById('close-modal');

// Função para abrir o modal
function openModal(e) {
    e.preventDefault(); // Previne o comportamento padrão do link
    modal.style.display = 'block';
}

// Função para fechar o modal
function closeModalFunc() {
    modal.style.display = 'none';
}

// Event listeners
closeModal.addEventListener('click', closeModalFunc);

// Fechar modal quando clicar fora dele
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModalFunc();
    }
});

// Adicionar evento de clique nos botões "Solicitar Visualização"
document.querySelectorAll('.solicitar-btn').forEach(button => {
    button.addEventListener('click', openModal);
});

// Animação de digitação para 'Welcome :)'
function typeWelcome(text, el, speed = 90) {
    let i = 0;
    function type() {
        if (i <= text.length) {
            el.textContent = text.slice(0, i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

const typingEl = document.getElementById('typing-welcome');
if (typingEl) {
    typeWelcome('Welcome :)', typingEl);
} 