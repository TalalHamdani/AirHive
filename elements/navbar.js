// Function to load Navbar
function loadNavbar() {
    fetch('elements/navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar').innerHTML = data;
            initializeNavbar(); // Initialize navbar buttons and features
        });
}

// Initialize Navbar when the DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    loadNavbar(); // Load the navbar
});

// Function to initialize Navbar and Dark Mode toggle
function initializeNavbar() {
    // Dark/Light Mode functionality
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

// Call this function in home.js when the page is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeNavbar(); // Initialize the Navbar and Dark Mode
});

// Get references to the buttons and modal elements
const signInButton = document.getElementById('sign-in-btn');
const signInModal = document.getElementById('sign-in-modal');
const closeButton = document.getElementById('sign-in-close');

// Function to open the modal
function openModal() {
    signInModal.style.display = 'block'; // Show the modal
}

// Function to close the modal
function closeModal() {
    signInModal.style.display = 'none'; // Hide the modal
}

// Event listener for the "Sign In" button to open the modal
signInButton.addEventListener('click', openModal);

// Event listener for the "Close" button to close the modal
closeButton.addEventListener('click', closeModal);

// Event listener for clicking outside the modal to close it
window.addEventListener('click', function (event) {
    if (event.target === signInModal) {
        closeModal();
    }
});
