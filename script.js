document.getElementById("year").textContent = new Date().getFullYear();
const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav nav");
menu.addEventListener("click", () => {
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
  if (nav.style.display === "flex") {
    nav.style.position = "absolute";
    nav.style.top = "76px";
    nav.style.right = "18px";
    nav.style.flexDirection = "column";
    nav.style.background = "#101419";
    nav.style.padding = "18px";
    nav.style.border = "1px solid #282e37";
    nav.style.borderRadius = "12px";
  }
});
