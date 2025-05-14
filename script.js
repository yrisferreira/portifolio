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

// Fun Facts por categoria
const factsByCategory = {
  rpa: [
    'Sabia que um robô RPA pode economizar até 40 horas de trabalho por semana? 🚀',
    'RPA pode reduzir custos operacionais em até 65%! 💰',
    'Automation Anywhere processa mais de 1 bilhão de automações por dia! 🌐',
    'O mercado global de RPA deve atingir $22 bilhões até 2025! 📈',
    'RPA pode reduzir erros em processos em até 95%! ✨',
    'Empresas que usam RPA têm ROI médio de 250%! 💎'
  ],
  python: [
    'Python é a linguagem mais usada em RPA e Data Science! 🐍',
    'O nome Python foi inspirado no grupo Monty Python! 🎭',
    'Python tem mais de 137.000 bibliotecas disponíveis! 📚',
    'Python é usado por 8.2 milhões de desenvolvedores! 👩‍💻',
    'Instagram e Spotify são construídos com Python! 🎵',
    'Python é a linguagem que mais cresce em RPA! 📊'
  ],
  ia: [
    'IA pode aumentar a produtividade do RPA em 50%! 🧠',
    'Chatbots com IA resolvem 70% dos casos sem humanos! 💬',
    'Machine Learning pode prever falhas antes de acontecerem! 🔮',
    'IA + RPA = Hyperautomation, tendência segundo Gartner! 🌟',
    'IPA (Intelligent Process Automation) é o futuro da automação! 🚀',
    'IA pode reduzir o tempo de desenvolvimento RPA em 60%! ⚡'
  ]
};

let currentCategory = 'rpa';
let currentIndex = 0;

const factText = document.querySelector('.fun-fact');
const prevBtn = document.querySelector('.prev-fact-btn');
const nextBtn = document.querySelector('.next-fact-btn');
const currentFactSpan = document.querySelector('.current-fact');
const totalFactsSpan = document.querySelector('.total-facts');
const categoryButtons = document.querySelectorAll('.fact-category');

function updateFact() {
  const facts = factsByCategory[currentCategory];
  factText.textContent = facts[currentIndex];
  currentFactSpan.textContent = currentIndex + 1;
  totalFactsSpan.textContent = facts.length;
}

function showNextFact() {
  const facts = factsByCategory[currentCategory];
  currentIndex = (currentIndex + 1) % facts.length;
  updateFact();
}

function showPrevFact() {
  const facts = factsByCategory[currentCategory];
  currentIndex = (currentIndex - 1 + facts.length) % facts.length;
  updateFact();
}

function changeCategory(category) {
  currentCategory = category;
  currentIndex = 0;
  updateFact();
  
  // Atualizar botões de categoria
  categoryButtons.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.category === category);
  });
}

// Event Listeners
if (prevBtn) prevBtn.addEventListener('click', showPrevFact);
if (nextBtn) nextBtn.addEventListener('click', showNextFact);

categoryButtons.forEach(btn => {
  btn.addEventListener('click', () => changeCategory(btn.dataset.category));
});

// Inicializar
if (factText) {
  updateFact();
}

// Adicionar navegação por teclado
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') showNextFact();
  if (e.key === 'ArrowLeft') showPrevFact();
});

// Garantir que o formulário seja enviado via HTTPS
document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.solicitacao-form');
  if (form) {
    form.addEventListener('submit', function(e) {
      if (window.location.protocol !== 'https:') {
        window.location.href = 'https://' + window.location.host + window.location.pathname;
        e.preventDefault();
      }
    });
  }
}); 