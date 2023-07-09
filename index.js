let homeBtn = document.getElementById("home-el");
let homePage = document.getElementById("home-page");
let contactPage = document.getElementById("contact-page");
let servicesPage = document.getElementById("resources-page");
let aboutPage = document.getElementById("about-page");
let servicesBtn = document.getElementById("services-button");
let aboutBtn = document.getElementById("about-button");

document.addEventListener("DOMContentLoaded", function () {
  // Code to execute when the DOM is ready
  servicesPage.classList.add("hide");
  aboutPage.classList.add("hide");
  var isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  if (isMobile) {
    window.location.href = "mobile.html";
  }
});

// Buttons

servicesBtn.addEventListener("click", function () {
  homePage.classList.add("hide");
  servicesPage.classList.remove("hide");
  aboutPage.classList.add("hide");
});

aboutBtn.addEventListener("click", function () {
  homePage.classList.add("hide");
  // add about page class list
  aboutPage.classList.remove("hide");
  servicesPage.classList.add("hide");
});

homeBtn.addEventListener("click", function () {
  homePage.classList.remove("hide");
  servicesPage.classList.add("hide");
  aboutPage.classList.add("hide");
});

//all external sources and mail =

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

function openGmail() {
  window.location.href = "mailto:fvt@fvt.co.za"; //"mailto:fvt@fvt.co.za"
}

function call(number) {
  window.location.href = "tel:" + number;

  call("082 872 6262");
}

//Scroll to section

const contactBtn = document.getElementById("Contact-el");
const contactSection = document.getElementById("contact-section");
const servicesSection = document.getElementById("services-section");
const aboutSection = document.getElementById("about-section");
const homeSection = document.getElementById("home-section");

const beginProjectBtn = document.getElementById("begin-project");

contactBtn.addEventListener("click", function () {
  contactSection.scrollIntoView({ behavior: "smooth" });
});
beginProjectBtn.addEventListener("click", function () {
  contactSection.scrollIntoView({ behavior: "smooth" });
});
servicesBtn.addEventListener("click", function () {
  servicesSection.scrollIntoView({ behavior: "smooth" });
});
aboutBtn.addEventListener("click", function () {
  aboutSection.scrollIntoView({ behavior: "smooth" });
});
homeBtn.addEventListener("click", function () {
  homeSection.scrollIntoView({ behavior: "smooth" });
});
