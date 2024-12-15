// Loading separate JS files for each element
import './elements/navbar.js';
import './elements/sidebar.js';
import './elements/darkmode.js';

// Function to load Navbar and Sidebar
function loadNavbarAndSidebar() {
    // Load navbar
    fetch('elements/navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar').innerHTML = data;
            initializeNavbar(); // Initialize navbar buttons and features
        });

    // Load sidebar
    fetch('elements/sidebar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('sidebar').innerHTML = data;
            initializeSidebar(); // Initialize sidebar buttons and features
        });
}

// Sidebar collapse functionality
function initializeSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const toggleButton = document.getElementById('sidebar-toggle');
    if (toggleButton) {
        toggleButton.addEventListener('click', function () {
            sidebar.classList.toggle('collapsed'); // Toggle the 'collapsed' class
        });
    }
}

// Navbar functionality (if any)
function initializeNavbar() {
    // Any navbar-specific functionality can go here
    const toggleButton = document.getElementById('sidebar-toggle');
    if (toggleButton) {
        toggleButton.addEventListener('click', function () {
            // Navbar-related logic, if necessary
        });
    }
}

// Dark/Light Mode functionality
function initializeMode() {
    const savedMode = localStorage.getItem('mode');
    const toggleButton = document.getElementById('mode-toggle');

    if (savedMode === 'dark') {
        document.body.classList.add('dark-mode');
        toggleButton.textContent = '☀️'; // Sun icon for dark mode (to switch to light)
    } else {
        document.body.classList.remove('dark-mode');
        toggleButton.textContent = '🌙'; // Moon icon for light mode (to switch to dark)
    }

    // Function to toggle between dark and light mode
    toggleButton.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
        const isDarkMode = document.body.classList.contains('dark-mode');
        toggleButton.textContent = isDarkMode ? '☀️' : '🌙';
        localStorage.setItem('mode', isDarkMode ? 'dark' : 'light');
    });
}

// Initialize everything when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    loadNavbarAndSidebar(); // Load the navbar and sidebar
    initializeMode(); // Initialize dark mode based on saved preference
});
