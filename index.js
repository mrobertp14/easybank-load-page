//jshint esversion:6

window.addEventListener("load", (evt) =>{
  var showMenu = false;
  domStrings = {
    hamburger: document.querySelector('#hamburger'),
    close: document.querySelector('#close'),
    nav: document.querySelector("nav"),
    topSection: document.querySelector(".top-section"),
    mockups: document.querySelector('#mockups'),
    intro: document.querySelector(".intro")
  };

  domStrings.hamburger.addEventListener("click", (evt)=>{
      if (!showMenu){
          domStrings.hamburger.style.display = "none";
          domStrings.close.style.display = "block";
          domStrings.nav.style.display = "block";
          domStrings.mockups.style.display="none";
          domStrings.topSection.classList.add("fade-top-section");
          domStrings.intro.classList.add("hide-intro");
          showMenu =true;
        }
  });

  domStrings.close.addEventListener("click", (evt)=>{
    if(showMenu){
      domStrings.hamburger.style.display = "block";
      domStrings.close.style.display = "none";
      domStrings.nav.style.display = "none";
      domStrings.mockups.style.display="inline-block";
      domStrings.topSection.classList.remove("fade-top-section");
      domStrings.intro.classList.remove("hide-intro");
      showMenu =false;
    }
});
});
