document.addEventListener("DOMContentLoaded", function () {
  eventListeners();
  darkMode();
});

function eventListeners() {
  const mobileMenu = document.querySelector(".mobile-menu");
  mobileMenu.addEventListener("click", navegacionResponsive);
}

function navegacionResponsive() {
  //Para abrir el menu
  const navegacion = document.querySelector(".navegacion");
  /*if (navegacion.classList.contains("mostrar")) {
    navegacion.classList.remove("mostrar");
  } else {
    navegacion.classList.add("mostrar");
  }*/
  navegacion.classList.toggle("mostrar"); //Es el mismo codigo de arriba, pero mas pequeno
}

function darkMode() {
  const prefiereDK = window.matchMedia("(prefers-color-scheme:dark)");
  if (prefiereDK.matches) {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
  prefiereDK.addEventListener("change", function () {
    if (prefiereDK.matches) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  });
  
  //El codigo de arriba, es para saber si el usuario tiene por default que todo se vea en dark mode en la computadora
  const botonDK = document.querySelector(".dark-mode-boton");
  botonDK.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  });
}
