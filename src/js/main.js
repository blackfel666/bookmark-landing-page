"use strict"

const nav = document.querySelector("#nav");
const open1 = document.querySelector("#open1");
const close1 = document.querySelector("#close1");

const emailInput = document.getElementById('email');
const emailError = document.getElementById('errorEmail');

open1.addEventListener("click", () => {
    nav.classList.add("visible");
})

close1.addEventListener("click", () => {
    nav.classList.remove("visible");
})

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