const hamburger = document.querySelector(".hamburgerMenu");
const dropDMenu = document.querySelector(".dropDownMenu");

hamburger.addEventListener("click", () => {
  dropDMenu.classList.toggle("open");
});
