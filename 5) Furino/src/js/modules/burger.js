"use strict"

const burger = document.querySelector(".header__burger")
const nav = document.querySelector(".header__nav")
const body = document.querySelector("body")

export function burgerOpen() {
  burger.addEventListener("click", function() {
    burger.classList.toggle("burger-active")
    nav.classList.toggle("nav-active")
    body.classList.toggle("body-block")
  })

}