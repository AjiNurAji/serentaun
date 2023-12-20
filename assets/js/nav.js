console.clear();
const menuAnimation = gsap.timeline({ paused: true });
const menuAnimationBack = gsap.timeline({ paused: true, reversed: true });
const navMain = document.getElementById("nav-link");
const menuButton = document.getElementById("menu-button");
const closeButton = document.getElementById("close-button");

gsap.set(".link", { y: 30 });

// menuAnimation
//   .to(navMain, {
//     duration: 0.8,
//     width: "100%",
//     clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
//     ease: "power2.inOut",
//     x: 0,
//     y: 0,
//     z: 0,
//   })
//   .to(".link", {
//     duration: 0.5,
//     autoAlpha: 1,
//     y: 0,
//     stagger: 0.2,
//     ease: "power4.out",
//   });

// menuAnimationBack
//   .to(".link", {
//     duration: 0.5,
//     autoAlpha: 0,
//     y: 30,
//     stagger: 0.2,
//     ease: "power4.out",
//   })
//   .to(navMain, {
//     duration: 0.55,
//     width: 0,
//     clipPath: "polygon(0 0, -100% 0, 100% 100%, 0 100%)",
//     ease: "power4.in",
//     x: 0,
//     y: 0,
//     z: 0,
//   });

  menuButton.onclick = function() {
    // menuAnimation.play(0);
    navMain.classList.add('active')
  };
  
  closeButton.onclick = function() {
    navMain.classList.remove('active')
  };
  