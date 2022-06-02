const year = document.querySelector(".year");
const nav__links = document.querySelector(".nav__links");
const menuBtn = document.querySelector(".menu-outline");
const hide = document.querySelectorAll(".hide");

menuBtn.addEventListener("click", () => {
  if (!nav__links.classList.contains("view")) {
    nav__links.classList.add("view");
  } else {
    nav__links.classList.remove("view");
  }
});
for (let i = 0; i < hide.length; i++) {
  const links = hide[i];
  links.addEventListener("click", () => {
    nav__links.classList.remove("view");
  });
}

year.textContent = getYear();
function getYear() {
  const yr = new Date().getFullYear();
  return yr;
}
