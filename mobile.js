const menuBtn = document.getElementById("menu-btn");
const dropdownEl = document.getElementById("navigation-dropdown");
const homePage = document.getElementById("home-page");
const navDropdown = document.getElementById("navigation-dropdown");
const headingContents = document.getElementById("heading-contents");
const closeBtn = document.getElementById("close-button");
const homeContents = document.getElementById("home-contents");
const bottomBar = document.getElementById("bottom-bar-section");
const allPages = document.getElementById("pages");

//Menu dropdown buttons
const servicesBtn = document.getElementById("services-btn");
const aboutBtn = document.getElementById("about-btn");
const contactBtn = document.getElementById("contact-btn");

//pages

const servicesPage = document.getElementById("services-page");
const aboutPage = document.getElementById("about-page");
const contactPage = document.getElementById("contact-page");

//Exception home button after selected menu option

const homeBtn = document.getElementById("home-after-button");

//sections

const homeSection = document.getElementById("home-section");

//event listeners

document.addEventListener("DOMContentLoaded", function () {
  dropdownEl.classList.add("hide");
  navDropdown.classList.add("hide");
  homeContents.classList.remove("hide");
  servicesPage.classList.add("hide");
  aboutPage.classList.add("hide");
  contactPage.classList.add("hide");
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

servicesBtn.addEventListener("click", function () {
  dropdownEl.classList.add("hide");
  navDropdown.classList.add("hide");
  menuBtn.classList.add("hide");
  headingContents.classList.add("hide");
  homeContents.classList.add("hide");
  homePage.classList.add("hide");
  bottomBar.classList.add("hide");
  servicesPage.classList.remove("hide");
});

aboutBtn.addEventListener("click", function () {
  dropdownEl.classList.add("hide");
  navDropdown.classList.add("hide");
  menuBtn.classList.add("hide");
  headingContents.classList.add("hide");
  homeContents.classList.add("hide");
  homePage.classList.add("hide");
  bottomBar.classList.add("hide");
  aboutPage.classList.remove("hide");
});

contactBtn.addEventListener("click", function () {
  dropdownEl.classList.add("hide");
  navDropdown.classList.add("hide");
  menuBtn.classList.add("hide");
  headingContents.classList.add("hide");
  homeContents.classList.add("hide");
  homePage.classList.add("hide");
  bottomBar.classList.add("hide");
  contactPage.classList.remove("hide");
});

//Home button to menu elements UI friendly
homeBtn.addEventListener("click", function () {
  dropdownEl.classList.add("hide");
  navDropdown.classList.add("hide");
  menuBtn.classList.remove("hide");
  headingContents.classList.remove("hide");
  homeContents.classList.remove("hide");
  homePage.classList.remove("hide");
  bottomBar.classList.remove("hide");
  // Om exceptions uit te rule!!
  contactPage.classList.add("hide");
  aboutPage.classList.add("hide");
  servicesPage.classList.add("hide");
  //Om beter te werk
  homeSection.scrollIntoView({ behavior: "smooth" });
});
//alternative to above function:

function homeAfterButton() {
  dropdownEl.classList.add("hide");
  navDropdown.classList.add("hide");
  menuBtn.classList.remove("hide");
  headingContents.classList.remove("hide");
  homeContents.classList.remove("hide");
  homePage.classList.remove("hide");
  bottomBar.classList.remove("hide");
  // Om exceptions uit te rule!!
  contactPage.classList.add("hide");
  aboutPage.classList.add("hide");
  servicesPage.classList.add("hide");
  //Better ui
  homeSection.scrollIntoView({ behavior: "smooth" });
}

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
