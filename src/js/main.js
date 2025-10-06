"use strict"

// ============ MENÚ NAVEGACIÓN ============
const nav = document.querySelector("#nav");
const open1 = document.querySelector("#open1");
const close1 = document.querySelector("#close1");

open1.addEventListener("click", () => {
    nav.classList.add("visible");
});

close1.addEventListener("click", () => {
    nav.classList.remove("visible");
});

// Cerrar menú al hacer clic fuera
nav.addEventListener("click", (e) => {
    if (e.target === nav) {
        nav.classList.remove("visible");
    }
});

// ============ VALIDACIÓN EMAIL ============
const emailInput = document.getElementById('email');
const emailError = document.getElementById('errorEmail');
const formulario = document.getElementById('formulario');
const contactBtn = document.getElementById('contact-us-btn');

// Función de validación reutilizable
function validateEmail() {
    if (emailInput.validity.typeMismatch || emailInput.validity.valueMissing) {
        emailError.textContent = 'Whoops, make sure it\'s an email';
        emailError.style.display = 'block';
        emailInput.classList.add('invalid');
        return false;
    } else {
        emailError.textContent = '';
        emailError.style.display = 'none';
        emailInput.classList.remove('invalid');
        return true;
    }
}

// Validar mientras escribe
emailInput.addEventListener('input', validateEmail);

// Validar al enviar
contactBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    if (validateEmail() && emailInput.value.trim() !== '') {
        console.log('Email válido:', emailInput.value);
        // Aquí puedes agregar la lógica para enviar el formulario
        alert('¡Gracias por suscribirte!');
        emailInput.value = '';
    }
});

// ============ SISTEMA DE PESTAÑAS ============
document.addEventListener("DOMContentLoaded", () => {
    const headings = document.querySelectorAll("hgroup h4");
    const images = document.querySelectorAll(".feature-img");

    // Validar que existan elementos
    if (headings.length === 0 || images.length === 0) {
        console.warn('No se encontraron pestañas o imágenes');
        return;
    }

    // Mostrar la primera imagen y activar primera pestaña
    images[0].classList.add("active");
    headings[0].classList.add("active"); // Añadir clase active al h4

    headings.forEach((h4, idx) => {
        h4.addEventListener("click", () => {
            const index = h4.getAttribute("data-img");

            // Remover active de todos los h4
            headings.forEach(h => h.classList.remove("active"));
            
            // Ocultar todas las imágenes
            images.forEach(img => img.classList.remove("active"));

            // Activar la pestaña clickeada
            h4.classList.add("active");
            
            // Mostrar la imagen seleccionada
            if (images[index]) {
                images[index].classList.add("active");
            }
        });
    });
});