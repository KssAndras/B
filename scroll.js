window.addEventListener("scroll", function() {
    var navbar = document.querySelector("nav");
    if (window.scrollY > 0) {
      navbar.classList.add("shrink");
    } else {
      navbar.classList.remove("shrink");
    }
  });
  