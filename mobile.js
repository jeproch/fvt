const menuBtn = document.getElementById("menu-btn");
const dropdownEl = document.getElementById("navigation-dropdown");
const homePage = document.getElementById("home-page");
const navDropdown = document.getElementById("navigation-dropdown");
const headingContents = document.getElementById("heading-contents");
const closeBtn = document.getElementById("close-button");
const homeContents = document.getElementById("home-contents");

document.addEventListener("DOMContentLoaded", function () {
  dropdownEl.classList.add("hide");
  navDropdown.classList.add("hide");
  homeContents.classList.remove("hide");
});

menuBtn.addEventListener("click", function () {
  dropdownEl.classList.remove("hide");
  navDropdown.classList.remove("hide");
  menuBtn.classList.add("hide");
  headingContents.classList.add("hide");
  homeContents.classList.add("hide");
});

closeBtn.addEventListener("click", function () {
  dropdownEl.classList.add("hide");
  navDropdown.classList.add("hide");
  menuBtn.classList.remove("hide");
  headingContents.classList.remove("hide");
  homeContents.classList.remove("hide");
});
