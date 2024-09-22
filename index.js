const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const overlay = document.getElementById("overlay");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  overlay.classList.toggle("active"); // Toggle the grey overlay
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  overlay.classList.toggle("active"); // Toggle the grey overlay
}

overlay.addEventListener("click", () => {
  navMenu.classList.remove("active"); // Close nav menu when clicking outside
  overlay.classList.remove("active"); // Remove grey overlay
  document.body.classList.remove("nav-open"); // Allow scrolling again
});
