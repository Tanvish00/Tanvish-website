'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }
var dropdown = document.querySelector(".dropdown");
var dropdownContent = document.querySelector(".dropdown-content");

dropdown.addEventListener("mouseover", function() {
  var rect = dropdown.getBoundingClientRect();
  var spaceBelow = window.innerHeight - rect.bottom;
  var spaceAbove = rect.top;
  
  if (spaceBelow < dropdownContent.offsetHeight && spaceAbove > dropdownContent.offsetHeight) {
    dropdownContent.classList.add("top");
    dropdownContent.classList.remove("bottom");
  } else {
    dropdownContent.classList.add("bottom");
    dropdownContent.classList.remove("top");
  }
});


// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



  

  

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}
