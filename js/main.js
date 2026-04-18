let menuButton = document.querySelector(".menu_button");
menuButton.addEventListener("click", showMenu);

let fadeClick = document.querySelector(".fade_layer");
fadeClick.addEventListener("click", showMenu);

function showMenu(){

    let menu = document.querySelector("nav.menu");
    menu.classList.toggle("show");

    let layer = document.querySelector(".fade_layer");
    layer.classList.toggle("visible");

}