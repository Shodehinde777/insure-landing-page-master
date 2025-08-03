const navLinks = document.querySelector(".nav__links");

// menu fade out animation

const handleHover = function (e) {
  // another type of matching strategy
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest(".nav__links").querySelectorAll(".nav__link");
    const logo = link.closest(".nav__links").querySelector("img");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
navLinks.addEventListener("mouseover", handleHover.bind(0.5));
navLinks.addEventListener("mouseout", handleHover.bind(1));

// mobile nav
const btnOpen = document.querySelector(".btn-mobile-navs");
const btnClose = document.querySelector(".btn-mobile-close");
const MobileLinks = document.querySelector(".nav__links");

btnOpen.addEventListener("click", () => {
  MobileLinks.classList.add("active");
  btnOpen.classList.add("hidden");
  btnClose.classList.remove("hidden");
});

btnClose.addEventListener("click", () => {
  MobileLinks.classList.remove("active");
  btnClose.classList.add("hidden");
  btnOpen.classList.remove("hidden");
});
