// script para curiosidades de Python
const facts = [
  'O nome Python vem do grupo de comédia britânico "Monty Python", não da cobra!',
  'Python foi lançado em 1991 por Guido van Rossum.',
  'O Zen do Python pode ser acessado digitando "import this" no terminal Python.',
  'Python é uma das linguagens mais usadas em ciência de dados e inteligência artificial.',
  'A indentação em Python não é opcional, ela define blocos de código!',
  'O mascote oficial do Python é uma cobra chamada "Python".',
  'Python é usado por empresas como Google, Netflix, Spotify e Instagram.',
  'Você pode rodar um servidor web com apenas uma linha: python -m http.server',
  'Python suporta múltiplos paradigmas: orientado a objetos, funcional e imperativo.'
];

const btn = document.getElementById('python-facts-btn');
const fact = document.getElementById('python-fact');

btn.addEventListener('click', () => {
  const random = Math.floor(Math.random() * facts.length);
  fact.textContent = facts[random];
  fact.style.display = 'block';
}); 
