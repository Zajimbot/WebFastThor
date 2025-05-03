function setupNavButtons() {
    const navButtons = document.querySelectorAll('.nav-button');
    
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            navButtons.forEach(btn => {
                btn.classList.remove('nav-button-active');
            });
            this.classList.add('nav-button-active');
        });
    });
}

// Запускаем функцию после полной загрузки DOM
document.addEventListener('DOMContentLoaded', setupNavButtons);