const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav nav");

if (menu && nav) {
  menu.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    menu.setAttribute("aria-expanded", String(open));
  });

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      menu.setAttribute("aria-expanded", "false");
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 700) {
      nav.classList.remove("is-open");
      menu.setAttribute("aria-expanded", "false");
    }
  });
}
