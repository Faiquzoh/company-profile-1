// function u/ perintah class yg mau di toggle (ilang munculin / on off)
function toggleMenu() {
    document.body.classList.toggle("menu-open"); //selector class melalui dom
}
// setup variable-in element yg akan id trigger u/ function
const toggleElements = document.querySelectorAll(
    '.hamburger-menu, .close-menu, .overlay, nav.mobile a, nav.mobile .contact'
);
// pasang event "click" di element yg udh divariable-in u/ trigger function
toggleElements.forEach((e) => e.addEventListener("click", toggleMenu));

// ui logic u/ resize shg sidebar literally ilang ketika >= 1024px
window.addEventListener("resize", () => {
    if (window.innerWidth >= 1024) {
        document.body.classList.remove("menu-open");
    }
}); 