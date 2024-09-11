// Simples interação com a rolagem suave ao clicar nos links do menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Função para mostrar ou esconder o rodapé
function toggleFooter() {
    const footer = document.getElementById('footer');
    // Se a distância até o topo da página + altura da janela for maior ou igual a altura total da página - altura do rodapé, mostrar o rodapé
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - footer.offsetHeight) {
        footer.classList.add('show-footer');
    } else {
        footer.classList.remove('show-footer');
    }
}

// Adicionar um event listener para o evento de rolagem
window.addEventListener('scroll', toggleFooter);

// Inicializar a função para o estado correto ao carregar a página
window.addEventListener('load', toggleFooter);
