
var navbar = document.querySelector('.navbar');
var logo = document.querySelector('.navbar-brand');

window.addEventListener('scroll', myFun);

var sticky = navbar.offsetHeight + 30;

function myFun() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("open");
    logo.classList.add("logo");
  } else {
    navbar.classList.remove("open");
    logo.classList.remove("logo");

  }
}

var navlinks = document.getElementsByClassName("nav-link");
var navcontents = document.getElementsByClassName("nav-content");
var tablinks = document.getElementsByClassName("tab-link");
var tabcontents = document.getElementsByClassName("tab-content");

function openlink(linkname) {
    for (navlink of navlinks) {
        navlink.classList.remove("active-link");
    }
    for (navcontent of navcontents) {
        navcontent.classList.remove("active-content");
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(linkname).classList.add("active-content");

}

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add('active');
    document.getElementById(tabname).classList.add("active-tab");

}


var mixer = mixitup('.mixp');

