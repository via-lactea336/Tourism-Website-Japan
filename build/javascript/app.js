// Obtenemos el ícono del menú y las opciones del menú
const menuIcon = document.querySelector(".menu-icon");
const menuItems = document.querySelectorAll(".dropdown_menu");

// Agregamos un evento de clic al ícono del menú
menuIcon.addEventListener("click", () => {
  // Alternamos la clase 'show-menu' en los elementos de las opciones del menú
  menuItems.forEach((item) => {
    item.classList.toggle("show-menu");
  });
});

const input = document.querySelector("#input");
const search = document.querySelector("#submit");
search.addEventListener("click", () => {
  input.value = "";
});

window.addEventListener("scroll", function () {
  let scrollingElement = document.querySelector(".position");
  let scrollTop = document.documentElement.scrollTop;
  scrollingElement.style.width = scrollTop * 0.15 + "px";
});
