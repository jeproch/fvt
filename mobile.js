const menuBtn = document.getElementById("menu-btn");
const dropdownEl = document.getElementById("navigation-dropdown");
const homePage = document.getElementById("home-page");
const navDropdown = document.getElementById("navigation-dropdown");
const headingContents = document.getElementById("heading-contents");
const closeBtn = document.getElementById("close-button");
const homeContents = document.getElementById("home-contents");
const bottomBar = document.getElementById("bottom-bar-section");

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
  homePage.classList.add("hide");
  bottomBar.classList.add("hide");
});

closeBtn.addEventListener("click", function () {
  dropdownEl.classList.add("hide");
  navDropdown.classList.add("hide");
  menuBtn.classList.remove("hide");
  headingContents.classList.remove("hide");
  homeContents.classList.remove("hide");
  homePage.classList.remove("hide");
  bottomBar.classList.remove("hide");
});

//Static functions

function openGmail() {
  window.location.href = "mailto:fvt@fvt.co.za"; //"mailto:fvt@fvt.co.za"
}

function call(number) {
  window.location.href = "tel:" + number;

  call("082 872 6262");
}

//TUT

function openTUT() {
  window.open("https://tutarchitecture.co.za/", "_blank");
}

//TUT
//SACAP

function openSACAP() {
  window.open("https://www.sacapsa.com/", "_blank");
}

//SACAP
