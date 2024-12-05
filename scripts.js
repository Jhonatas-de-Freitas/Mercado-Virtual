document.addEventListener('DOMContentLoaded', () => {
    // Exemplo simples: Alert ao carregar a página
    alert('Bem-vindo ao Mercado Piltover!');

    // Mudar a cor de fundo da seção de produtos ao clicar em um botão
    const produtosSection = document.getElementById('produtos');
    produtosSection.appendChild(changeColorButton);
});