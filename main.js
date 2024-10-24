const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const hamburgerIcon = document.querySelector(".hamburger i");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");

  // Toggle between hamburger and cross icon
  if (menu.classList.contains("active")) {
    hamburgerIcon.classList.remove("fa-bars");
    hamburgerIcon.classList.add("fa-times");
  } else {
    hamburgerIcon.classList.remove("fa-times");
    hamburgerIcon.classList.add("fa-bars");
  }
});
