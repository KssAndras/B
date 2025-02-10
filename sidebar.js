/* const sidebar = document.getElementById("sidebar");

// Toggle the sidebar open/close
function toggleSidebar() {
  sidebar.classList.toggle("show");
} */

const sidebar = document.getElementById("sidebar");

// Toggle the sidebar open/close
function toggleSidebar() {
  sidebar.classList.toggle("show");
}

// Ha egy elemre kattintanak a sidebarban, bezárjuk azt
sidebar.addEventListener("click", function (event) {
  // Ha az elem nem a gomb, akkor bezárjuk a sidebar-t
  sidebar.classList.remove("show");
});
