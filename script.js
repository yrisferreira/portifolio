// Esperar o DOM carregar completamente
document.addEventListener('DOMContentLoaded', function() {
  // Modal de solicitação de visualização
  var modal = document.getElementById('modal-solicitacao');
  var closeModal = document.getElementById('close-modal');

  // Função para abrir o modal
  function openModal(e) {
    if (e) {
      e.preventDefault();
    }
    if (modal) {
      modal.style.display = 'block';
    }
  }

  // Função para fechar o modal
  function closeModalFunc() {
    if (modal) {
      modal.style.display = 'none';
    }
  }

  // Event listeners
  if (closeModal) {
    closeModal.addEventListener('click', closeModalFunc);
  }

  // Fechar modal quando clicar fora dele
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      closeModalFunc();
    }
  });

  // Adicionar evento de clique nos botões "Solicitar Visualização"
  var solicitarBtns = document.querySelectorAll('.solicitar-btn');
  if (solicitarBtns) {
    solicitarBtns.forEach(function(button) {
      button.addEventListener('click', openModal);
    });
  }

  // Animação de digitação para 'Welcome :)'
  function typeWelcome(text, el, speed) {
    if (!el) return;
    
    var i = 0;
    speed = speed || 90;

    function type() {
      if (i <= text.length) {
        el.textContent = text.slice(0, i);
        i++;
        setTimeout(type, speed);
      }
    }
    type();
  }

  var typingEl = document.getElementById('typing-welcome');
  if (typingEl) {
    typeWelcome('Welcome :)', typingEl);
  }

  // Fun Facts por categoria
  var factsByCategory = {
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

  var currentCategory = 'rpa';
  var currentIndex = 0;

  var factText = document.querySelector('.fun-fact');
  var prevBtn = document.querySelector('.prev-fact-btn');
  var nextBtn = document.querySelector('.next-fact-btn');
  var currentFactSpan = document.querySelector('.current-fact');
  var totalFactsSpan = document.querySelector('.total-facts');
  var categoryButtons = document.querySelectorAll('.fact-category');

  function updateFact() {
    if (!factText || !currentFactSpan || !totalFactsSpan) return;
    
    var facts = factsByCategory[currentCategory];
    if (facts) {
      factText.textContent = facts[currentIndex];
      currentFactSpan.textContent = currentIndex + 1;
      totalFactsSpan.textContent = facts.length;
    }
  }

  function showNextFact() {
    var facts = factsByCategory[currentCategory];
    if (facts) {
      currentIndex = (currentIndex + 1) % facts.length;
      updateFact();
    }
  }

  function showPrevFact() {
    var facts = factsByCategory[currentCategory];
    if (facts) {
      currentIndex = (currentIndex - 1 + facts.length) % facts.length;
      updateFact();
    }
  }

  function changeCategory(category) {
    if (factsByCategory[category]) {
      currentCategory = category;
      currentIndex = 0;
      updateFact();
      
      if (categoryButtons) {
        categoryButtons.forEach(function(btn) {
          btn.classList.toggle('active', btn.dataset.category === category);
        });
      }
    }
  }

  // Event Listeners
  if (prevBtn) {
    prevBtn.addEventListener('click', showPrevFact);
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', showNextFact);
  }

  if (categoryButtons) {
    categoryButtons.forEach(function(btn) {
      btn.addEventListener('click', function() {
        changeCategory(btn.dataset.category);
      });
    });
  }

  // Inicializar Fun Facts
  if (factText) {
    updateFact();
  }

  // Adicionar navegação por teclado
  document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowRight') {
      showNextFact();
    }
    if (e.key === 'ArrowLeft') {
      showPrevFact();
    }
  });
}); 