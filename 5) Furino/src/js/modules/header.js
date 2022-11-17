"use strict"

export function form() {
  const search = document.querySelector(".header__search")
  const form = document.querySelector(".header__form")

  search.addEventListener("click", function() {
  form.classList.toggle("form-active")
  })

  
}