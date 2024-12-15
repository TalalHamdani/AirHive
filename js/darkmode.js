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

// Initialize Dark Mode when the DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    initializeMode(); // Initialize dark mode based on saved preference
});
