// filterMenu.js
function initFilterMenu() {
    const filterMenu = document.querySelector('.filter-left-menu');
    const openButton = document.getElementById('open-filter-button');
    const closeButton = document.getElementById('close-filter-button');

    function openFilterMenu() {
        filterMenu.style.transform = 'translateX(0)';
    }

    function closeFilterMenu() {
        filterMenu.style.transform = 'translateX(-100%)';
    }

    if (openButton && filterMenu) {
        openButton.addEventListener('click', openFilterMenu);
    }

    if (closeButton && filterMenu) {
        closeButton.addEventListener('click', closeFilterMenu);
    }

    // Закрытие при клике вне меню
    document.addEventListener('click', function(event) {
        if (filterMenu && 
            !filterMenu.contains(event.target) && 
            event.target !== openButton && 
            filterMenu.style.transform === 'translateX(0)') {
            closeFilterMenu();
        }
    });
}

// Инициализация после загрузки DOM
document.addEventListener('DOMContentLoaded', initFilterMenu);