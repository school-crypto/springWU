let menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", showMenu);

let fadeClick = document.querySelector(".fade-layer");
fadeClick.addEventListener("click", showMenu);

function showMenu(){

    let menu = document.querySelector("nav.menu");
    menu.classList.toggle("show");

    let layer = document.querySelector(".fade-layer");
    layer.classList.toggle("visible");

}