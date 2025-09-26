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