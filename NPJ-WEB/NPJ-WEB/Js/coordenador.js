document.addEventListener('DOMContentLoaded', () => {
    // 1. Animação simples para os círculos de progresso
    const circles = document.querySelectorAll('.circle');
    
    circles.forEach(circle => {
        // Simula uma pequena animação de carregamento ao abrir a página
        circle.style.opacity = '0';
        circle.style.transition = 'opacity 1s ease-in-out';
        
        setTimeout(() => {
            circle.style.opacity = '1';
        }, 300);
    });

    // 2. Lógica para os botões da barra inferior
    const navItems = document.querySelectorAll('.f-item, .nav-btn, .action-item');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const feature = item.querySelector('span').innerText;
            alert(`Abrindo módulo de ${feature}...`);
        });
    });

    // 3. Lógica para as linhas do menu (Histórico, Produtividade, etc)
    const menuRows = document.querySelectorAll('.menu-row, .list-row');
    menuRows.forEach(row => {
        row.addEventListener('click', () => {
            const label = row.querySelector('.text, .row-name, .label').innerText;
            console.log(`Acessando: ${label}`);
            // Aqui você pode adicionar: window.location.href = 'pagina.html';
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const circles = document.querySelectorAll('.circle');
    circles.forEach(circle => {
        circle.style.opacity = '0';
        circle.style.transition = 'opacity 1.5s ease';
        setTimeout(() => { circle.style.opacity = '1'; }, 500);
    });
});