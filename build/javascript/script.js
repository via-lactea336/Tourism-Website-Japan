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

// Vaciamos el input
const input = document.querySelector("#input");
const search = document.querySelector("#submit");
search.addEventListener("click", () => {
  input.value = "";
});

// Obtenemos los elementos
const btns = document.querySelectorAll(".go_tokyo, .go_kyoto, .go_osaka, .go_nara");
const elements = {
  go_tokyo: document.querySelector(".tokyo"),
  go_kyoto: document.querySelector(".kyoto"),
  go_osaka: document.querySelector(".osaka"),
  go_nara: document.querySelector(".nara"),
};

btns.forEach((btn) =>
  btn.addEventListener("click", () => {
    // Ocultar todos los elementos
    Object.values(elements).forEach((element) => element.classList.add("hidden"));

    // Mostrar el elemento correspondiente al botón que se hizo clic
    const targetElement = elements[btn.classList[0]];
    targetElement.classList.remove("hidden");
  }),
);
