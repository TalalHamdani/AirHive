// Function to load Navbar and Sidebar
function loadNavbarAndSidebar() {
    // Load navbar
    fetch('elements/navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar').innerHTML = data;
            initializeNavbar(); // Initialize navbar buttons and features
            initializeMode();  // Call initializeMode here to ensure it's done after the navbar is loaded
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
}

// Dark/Light Mode functionality
function initializeMode() {
    const savedMode = localStorage.getItem('mode');
    const toggleButton = document.getElementById('mode-toggle');

    // Check if there's a saved mode preference in localStorage
    if (savedMode === 'dark') {
        document.body.classList.add('dark-mode');
        toggleButton.textContent = '☀️'; // Sun icon for dark mode (to switch to light)
    } else {
        document.body.classList.remove('dark-mode');
        toggleButton.textContent = '🌙'; // Moon icon for light mode (to switch to dark)
    }

    // Toggle dark mode on button click
    toggleButton.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
        const isDarkMode = document.body.classList.contains('dark-mode');
        toggleButton.textContent = isDarkMode ? '☀️' : '🌙'; // Update icon
        localStorage.setItem('mode', isDarkMode ? 'dark' : 'light'); // Save mode in localStorage
    });
}

// Function to load Video Cards dynamically
function loadVideoCards() {
    const videoContainer = document.getElementById('video-container');

    // Fetch the video card HTML content
    fetch('elements/video-card.html')
        .then(response => response.text())
        .then(data => {
            // Append the video card content to the container (5 video cards for example)
            for (let i = 0; i < 5; i++) {
                videoContainer.innerHTML += data;
            }
        })
        .catch(error => console.error('Error loading video cards:', error));
}

// Initialize Navbar, Sidebar, Video Cards, and Dark Mode when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    loadNavbarAndSidebar(); // Load the navbar and sidebar
    loadVideoCards(); // Load video cards
    initializeMode(); // Initialize dark mode based on saved preference
});
