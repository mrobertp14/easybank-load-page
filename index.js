//jshint esversion:6

window.addEventListener("load", (evt) =>{
  var showMenu = false;
  domStrings = {
    hamburger: document.querySelector('.nav-img'),
    nav: document.querySelector("nav"),
    topSection: document.querySelector(".top-section"),
    mockups: document.querySelector('#mockups')
  };

  domStrings.hamburger.addEventListener("click", (evt)=>{
      if (!showMenu){
          domStrings.nav.style.display = "block";
          domStrings.mockups.style.display="none";
          domStrings.topSection.classList.add("fade-top-section");
          showMenu =true;
        }
        else{
          domStrings.nav.style.display = "none";
          domStrings.mockups.style.display="inline-block";
          domStrings.topSection.classList.remove("fade-top-section");
          showMenu =false;
        }
  });
});
