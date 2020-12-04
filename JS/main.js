/*$(".btn").tilt({
  glare: true,
  maxGlare: 0.5,
});*/

//Scroll To Top button animation

/*let scrollBtn = document.querySelector(".scrollToTop");

scrollBtn.addEventListener("click", function () {
  //window.scrollTo(0, 0);

  $("html, body").animate({ scrollTop: 0 }, "slow");
});*/

// Scroll Animation for Header section

window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});
//validateEmail();