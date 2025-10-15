const tabs = document.querySelectorAll('#features h4');
const images = document.querySelectorAll('.feature-img');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const tabIndex = tab.getAttribute('data-img');
        
        // 1. Manejar Visibilidad de Imágenes
        images.forEach(img => {
            img.classList.add('hidden'); // Ocultar todas
        });
        
        const activeImage = document.querySelector(`.feature-img[data-tab="${tabIndex}"]`);
        activeImage.classList.remove('hidden'); // Mostrar la activa
        
        // 2. Manejar la Pestaña Activa (Estilo)
        tabs.forEach(t => t.classList.remove('active-tab', 'border-red-500'));
        tab.classList.add('active-tab', 'border-red-500'); // Resaltar la pestaña
    });
});