document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.querySelector("nav");
    var checkbox = document.getElementById("check");

    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            navbar.classList.add("navbar-colored");
            navbar.classList.remove("navbar-transparent");
        } else {
            if (window.scrollY === 0) {
                navbar.classList.remove("navbar-colored");
                navbar.classList.add("navbar-transparent");
            }
        }
    });

    window.addEventListener("scroll", function () {
        if (window.scrollY > 0) {
            navbar.classList.add("navbar-shrink");
            navbar.classList.add("navbar-colored");
            navbar.classList.remove("navbar-transparent");
        } else {
            if (!checkbox.checked) {
                navbar.classList.remove("navbar-shrink");
                navbar.classList.remove("navbar-colored");
                navbar.classList.add("navbar-transparent");
            }
        }
    });
});
