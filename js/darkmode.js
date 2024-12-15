// Function to initialize the dark/light mode based on saved preferences
function initializeMode() {
    const savedMode = localStorage.getItem("mode");
    const toggleButton = document.getElementById("mode-toggle");

    if (savedMode === "dark") {
        document.body.classList.add("dark-mode");
        toggleButton.textContent = "☀️"; // Sun icon for dark mode (to switch to light)
    } else {
        document.body.classList.remove("dark-mode");
        toggleButton.textContent = "🌙"; // Moon icon for light mode (to switch to dark)
    }
}

// Function to toggle between dark and light mode
function toggleMode() {
    const toggleButton = document.getElementById("mode-toggle");

    // Toggle the dark-mode class on the body
    document.body.classList.toggle("dark-mode");

    // Update the button symbol
    const isDarkMode = document.body.classList.contains("dark-mode");
    toggleButton.textContent = isDarkMode ? "☀️" : "🌙";

    // Save the current mode in localStorage
    const mode = isDarkMode ? "dark" : "light";
    localStorage.setItem("mode", mode);
}

// Add event listener to the mode toggle button
function setupEventListeners() {
    const toggleButton = document.getElementById("mode-toggle");

    // Check if the button exists before adding the event listener
    if (toggleButton) {
        toggleButton.addEventListener("click", toggleMode);
    }
}

// Initialize the dark mode functionality when the page loads
document.addEventListener("DOMContentLoaded", function () {
    initializeMode(); // Apply the saved mode on page load
    setupEventListeners(); // Setup all event listeners for dark mode
});
