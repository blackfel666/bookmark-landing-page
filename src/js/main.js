const nav = document.querySelector("#nav");
const open1 = document.querySelector("#open1");
const close1 = document.querySelector("#close1");

// Abrir Menú: Cambiar de invisible a visible
open1.addEventListener("click", () => {
    nav.classList.remove("invisible", "opacity-0");
    nav.classList.add("visible", "opacity-100");
});

// Cerrar Menú: Cambiar de visible a invisible
close1.addEventListener("click", () => {
    nav.classList.add("invisible", "opacity-0");
    nav.classList.remove("visible", "opacity-100");
});

// Cerrar menú al hacer clic fuera (usando el fondo oscuro)
nav.addEventListener("click", (e) => {
    if (e.target === nav) {
        nav.classList.add("invisible", "opacity-0");
        nav.classList.remove("visible", "opacity-100");
    }
});const tabs = document.querySelectorAll('#features h4');
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

const formulario = document.getElementById('formulario');
const emailInput = document.getElementById('email');
const errorEmail = document.getElementById('errorEmail');


function validarEmail() {
    // 1. **NUEVA CONDICIÓN:** Si el campo está vacío, oculta el error y termina.
    if (emailInput.value.trim() === '') {
        errorEmail.classList.add('hidden');
        emailInput.classList.remove('custom-input-error-active');
        return true; // Se considera válido temporalmente para que no salte la alerta
    }

    // 2. Condición HTML5 (solo se ejecuta si el campo tiene texto)
    if (emailInput.validity.valid) {
        // Campo VÁLIDO: Ocultar el error y limpiar estilos
        errorEmail.classList.add('hidden');
        emailInput.classList.remove('custom-input-error-active');
        return true; 
    } else {
        // Campo INVÁLIDO (Formato incorrecto O valor requerido no existe)
        errorEmail.classList.remove('hidden');
        emailInput.classList.add('custom-input-error-active');
        return false; 
    }
}

formulario.addEventListener('submit', (event) => {
    event.preventDefault(); 
    
    const esValido = validarEmail();
    
    if (esValido) {
        alert('¡Email válido! Enviando datos...');
    }
});

emailInput.addEventListener('input', validarEmail);       
emailInput.addEventListener('focusout', validarEmail); 
