//nav menu mobile
const btnMobile = document.getElementById("btn-mobile");
const itemsMenu = document.querySelectorAll(".linksMenu");
const nav = document.getElementById("nav");
const active = nav.classList.contains("active");


function toggleMenu(event) {
    if (event.type === "touchstart") event.preventDefault();
    nav.classList.toggle("active");
    event.currentTarget.setAttribute("aria-expanded", active);
    if (active) {
        event.currentTarget.setAttribute("aria-label", "Fechar Menu");
    } else {
        event.currentTarget.setAttribute("aria-label", "Abrir Menu");
    }
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);

itemsMenu.forEach(function (event) {
    event.addEventListener("click", function () {
        nav.classList.remove("active");
        btnMobile.removeAttribute("aria-expanded");
        btnMobile.removeAttribute("aria-label");
    })
})

// volta para o topo
$(document).ready(function () {
    // esconde e mostra o btn
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) { // distancia que tem que rolar antes de aparecer
            $(".back-to-top").fadeIn(250);
        } else {
            $(".back-to-top").fadeOut(250);
        }
    });
    // manda pro topo
    $(".back-to-top").click(function (event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, 100);
    });

});