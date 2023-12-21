const menuAnimation = gsap.timeline({ paused: true });
const menuAnimationBack = gsap.timeline({ paused: true, reversed: true });
const navMain = document.getElementById("nav-link");
const menuButton = document.getElementById("menu-button");
const closeButton = document.getElementById("close-button");

gsap.set(".link", { y: 30 });

menuButton.onclick = function () {
  navMain.classList.add("active");
};

closeButton.onclick = function () {
  navMain.classList.remove("active");
};