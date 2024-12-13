// Seleciona todas as divs que você deseja animar
const cheats = document.querySelectorAll('.cheat');

// Função para observar se o conteúdo entra na viewport
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Adiciona a classe que faz a animação
        }
    });
});

// Aplica o observador a cada elemento com a classe 'cheat'
cheats.forEach(cheat => {
    observer.observe(cheat);
});