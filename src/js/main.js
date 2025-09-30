"use strict"

const nav = document.querySelector("#nav");
const open1 = document.querySelector("#open1");
const close1 = document.querySelector("#close1");


open1.addEventListener("click", () => {
    nav.classList.add("visible");
})

close1.addEventListener("click", () => {
    nav.classList.remove("visible");
})

const emailInput = document.getElementById('email');
const emailError = document.getElementById('errorEmail');

emailInput.addEventListener('input', function () {
  if (emailInput.validity.typeMismatch) {
    emailError.textContent = 'whoops, make sure it´s an email';
    emailError.style.display = 'block';
    emailInput.classList.add('invalid');
  } else {
    emailError.textContent = '';
    emailError.style.display = 'none';
    emailInput.classList.remove('invalid');
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const headings = document.querySelectorAll("hgroup h4");
  const images = document.querySelectorAll(".feature-img");

  // Mostrar la primera imagen por defecto
  images[0].classList.add("active");

  headings.forEach(h4 => {
    h4.addEventListener("click", () => {
      const index = h4.getAttribute("data-img");

      // Ocultar todas
      images.forEach(img => img.classList.remove("active"));

      // Mostrar la seleccionada
      images[index].classList.add("active");
    });
  });
});