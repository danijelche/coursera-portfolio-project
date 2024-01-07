const menuBarEl = document.getElementById("menu-toggle");
const navBarEl = document.querySelector("nav");
const contactEl = document.querySelector(".contact-me");
const openContactEl = document.querySelector(".modal-overlay");
const closeContactEl = document.querySelector(".close-btn");

menuBarEl.addEventListener("click", ()=> {
    navBarEl.classList.toggle("nav-active");
});

contactEl.addEventListener("click", ()=> {
    openContactEl.classList.add("open-modal");
});
closeContactEl.addEventListener("click", ()=> {
    openContactEl.classList.remove("open-modal");
})
