document.addEventListener("DOMContentLoaded", function () {
  const typewriter = document.querySelector(".typewriter h1");

  typewriter.addEventListener("animationend", (event) => {
    if (event.animationName === "typing") {
      setTimeout(() => {
        typewriter.classList.add("typing-done");
        typewriter.style.borderRight = "none"; // A kurzor eltűnik 3 másodperc után
      }, 2700); // 3 másodpercig hagyjuk villogni
    }
  });
});
