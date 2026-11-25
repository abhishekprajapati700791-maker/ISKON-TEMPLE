// Welcome message
window.addEventListener("load", function () {
    console.log("Welcome to ISKCON Vrindavan Website!");
});

// Navigation click message
const links = document.querySelectorAll("nav a");

links.forEach(function (link) {
    link.addEventListener("click", function () {
        console.log("You opened: " + link.textContent);
    });
});