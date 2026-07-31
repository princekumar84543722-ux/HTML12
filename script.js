// ==============================
// FALCON SERVICES
// script.js
// ==============================

// Sticky Navbar Shadow
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("shadow");
    } else {
        navbar.classList.remove("shadow");
    }
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });
});

// Fade Animation
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.2
});

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = ".6s";

    observer.observe(card);

});

// Back To Top Button
const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.className = "btn btn-primary";

topBtn.style.position = "fixed";
topBtn.style.bottom = "160px";
topBtn.style.right = "20px";
topBtn.style.display = "none";
topBtn.style.zIndex = "999";
topBtn.style.borderRadius = "50%";
topBtn.style.width = "50px";
topBtn.style.height = "50px";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

// Current Year in Footer
const year = document.getElementById("year");

if (year) {
    year.innerHTML = new Date().getFullYear();
}

console.log("FALCON SERVICES Website Loaded Successfully");
