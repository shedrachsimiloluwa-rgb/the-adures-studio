// INITIALISE ICONS

lucide.createIcons();


// LOADING SCREEN

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loader")
            .classList.add("hide");

    }, 1000);

});


// MOBILE MENU

const menuBtn = document.getElementById("menuBtn");

const navbar = document.getElementById("navbar");


menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("active");

});


// CLOSE MENU AFTER CLICKING A LINK

document.querySelectorAll(".navbar a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

    });

});


// CLOSE MENU WHEN CLICKING OUTSIDE

document.addEventListener("click", (event) => {

    if (

        !navbar.contains(event.target) &&
        !menuBtn.contains(event.target)

    ) {

        navbar.classList.remove("active");

    }

});


// SCROLL ANIMATIONS

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

            observer.unobserve(entry.target);

        }

    });

}, {

    threshold: 0.12

});


document.querySelectorAll(

    ".service-card, .gallery-item, .about-content, .why-card"

).forEach(element => {

    observer.observe(element);

});


// DYNAMIC COPYRIGHT YEAR

const footer = document.querySelector(".footer-bottom p");

if (footer) {

    footer.textContent =

        `© ${new Date().getFullYear()} Adure Signatures. All Rights Reserved.`;

}