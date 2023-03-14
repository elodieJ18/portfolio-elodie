

const menuMobile = document.querySelector(".menuMobile");
const menuItems = document.querySelectorAll(".menuItems");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

export const ToggleMenu = () => { 
    if (menuMobile.classList.contains("showMenu")) {
    menuMobile.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menuMobile.classList.add("showMenu");
    // closeIcon.style.display = "block !important";
    closeIcon.style.setProperty("display", "block", "important");
    menuIcon.style.display = "none";
  }}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach((menuItem) => {
  menuItem.addEventListener("click", toggleMenu);
});

export default ToggleMenu;