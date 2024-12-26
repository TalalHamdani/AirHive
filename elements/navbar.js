// Navbar script
console.log('Navbar script loaded');

// Initialize the navbar and its dependencies when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    loadNavbar();
});

// Function to load the navbar from an external HTML file
function loadNavbar() {
    fetch('elements/navbar.html')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('navbar').innerHTML = data;
            initializeNavbar(); // Initialize navbar features after loading
        })
        .catch(error => console.error('Error loading navbar:', error));
}

// Function to initialize the navbar and handle visibility of buttons based on session
function initializeNavbar() {
    console.log('Initializing Navbar...');

    // Dark mode toggle functionality
    const toggleButton = document.getElementById('mode-toggle');
    if (toggleButton) {
        const savedMode = localStorage.getItem('mode');
        console.log('Saved mode:', savedMode);

        // Apply the saved mode on page load
        if (savedMode === 'dark') {
            document.body.classList.add('dark-mode');
            toggleButton.textContent = '☀️'; // Sun icon for dark mode
        } else {
            document.body.classList.remove('dark-mode');
            toggleButton.textContent = '🌙'; // Moon icon for light mode
        }

        // Add click event listener for the toggle button
        toggleButton.addEventListener('click', () => {
            const isDarkMode = document.body.classList.toggle('dark-mode');
            toggleButton.textContent = isDarkMode ? '☀️' : '🌙';
            localStorage.setItem('mode', isDarkMode ? 'dark' : 'light');
            console.log('Mode changed to', isDarkMode ? 'dark' : 'light');
        });
    } else {
        console.log('Dark mode toggle button not found.');
    }

    // Handle sign-in button and user icon visibility based on session
    const signInButton = document.getElementById('sign-in-page');
    const userIcon = document.getElementById('user-icon');
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    console.log('isLoggedIn status:', isLoggedIn);

    if (signInButton && userIcon) {
        if (isLoggedIn === 'true') {
            console.log('User is logged in. Hiding Sign-In button and showing User Icon.');
            signInButton.style.display = 'none'; // Hide the Sign-In button
            userIcon.style.display = 'block'; // Show the User Icon
        } else {
            console.log('User is not logged in. Showing Sign-In button and hiding User Icon.');
            signInButton.style.display = 'block'; // Show the Sign-In button
            userIcon.style.display = 'none'; // Hide the User Icon
        }
    } else {
        console.log('Sign-In button or User Icon not found in the navbar.');
    }

    // Logout functionality
    const logoutButton = document.getElementById('logoutButton');
    if (logoutButton) {
        logoutButton.addEventListener('click', () => {
            console.log('User logged out. Clearing session and redirecting to home.');
            localStorage.removeItem('isLoggedIn');
            window.location.href = '/index.html';
        });
    }

    // Modal functionality
    const modal = document.getElementById('myModal');
    const modalTrigger = document.getElementById('myBtn');
    const modalClose = document.getElementsByClassName('close')[0];

    if (modalTrigger) {
        modalTrigger.onclick = function () {
            modal.style.display = 'block';
        };
    }

    if (modalClose) {
        modalClose.onclick = function () {
            modal.style.display = 'none';
        };
    }

    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
}
