function checkTimeAndSwitchTheme() {
    var now = new Date();
    var hours = now.getHours();

    // If it's 6 PM or later, switch to dark theme
    if (hours >= 22) {
        document
            .getElementById("theme-style")
            .setAttribute("href", "dark_theme.css");
    }
}

// Call the function when the page loads
window.onload = checkTimeAndSwitchTheme;
