"use strict";
const buttonMobile = document.getElementById("btn-mobile");
function toggleMenu(event) {
    const nav = document.getElementById("nav");
    const button = event.currentTarget;
    console.log(event);
    console.log(button);
    if (button instanceof HTMLElement && nav) {
        const active = nav.classList.contains("active");
        if (active) {
            nav.classList.remove("active");
            button.setAttribute("aria-expanded", "false");
            button.setAttribute("aria-label", "Abrir Menu");
        }
        else {
            nav.classList.add("active");
            button.setAttribute("aria-expanded", "true");
            button.setAttribute("aria-label", "Fechar Menu");
        }
    }
}
buttonMobile?.addEventListener("pointerdown", toggleMenu);
//# sourceMappingURL=script.js.map