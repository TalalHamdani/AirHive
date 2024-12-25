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

// Function to initialize the navbar and handle dark mode toggle
function initializeNavbar() {
    const toggleButton = document.getElementById('mode-toggle');

    // Set initial mode based on saved preference
    const savedMode = localStorage.getItem('mode');
    if (savedMode === 'dark') {
        document.body.classList.add('dark-mode');
        toggleButton.textContent = '☀️'; // Sun icon for dark mode
    } else {
        document.body.classList.remove('dark-mode');
        toggleButton.textContent = '🌙'; // Moon icon for light mode
    }

    // Add event listener for dark mode toggle
    toggleButton.addEventListener('click', () => {
        const isDarkMode = document.body.classList.toggle('dark-mode');
        toggleButton.textContent = isDarkMode ? '☀️' : '🌙';
        localStorage.setItem('mode', isDarkMode ? 'dark' : 'light');
        console.log('Mode changed to', isDarkMode ? 'dark' : 'light');
    });

    initializeClerkIntegration(); // Initialize Clerk functionality

    // Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
}

// Function to initialize Clerk SDK and manage user authentication
function initializeClerkIntegration() {

    const clerk = new Clerk({
        // Your Clerk API key
        apiKey: 'pk_test_dG9waWNhbC1wdWctNjYuY2xlcmsuYWNjb3VudHMuZGV2JA',
        // Your Clerk API secret
        // apiSecret: 'YOUR_API_SECRET',
      });
      
    const userButtonContainer = document.getElementById('user-button-container');
    const signInButton = document.getElementById('sign-in-page');

    // Display last known state from localStorage
    const lastKnownState = localStorage.getItem('isUserSignedIn');
    if (lastKnownState === 'true') {
        // Show profile placeholder immediately
        userButtonContainer.innerHTML = '<span>Loading Profile...</span>';
        signInButton.style.display = 'none';
    } else {
        // Show Sign-In button immediately
        userButtonContainer.innerHTML = '';
        signInButton.style.display = 'block';
    }

    window.addEventListener('load', async () => {
        try {
            // Load Clerk SDK
            await Clerk.load();
            console.log('Clerk loaded');

            // Check authentication state and update the UI
            if (Clerk.user) {
                console.log('User is signed in');

                // Persist user state in localStorage
                localStorage.setItem('isUserSignedIn', 'true');

                // Mount UserButton and hide the Sign-In button
                userButtonContainer.innerHTML = '';
                Clerk.mountUserButton(userButtonContainer);
                signInButton.style.display = 'none';
            } else {
                console.log('User is not signed in');

                // Persist user state in localStorage
                localStorage.setItem('isUserSignedIn', 'false');

                // Show the Sign-In button
                userButtonContainer.innerHTML = '';
                signInButton.style.display = 'block';
            }
        } catch (error) {
            console.error('Error initializing Clerk:', error);

            // Handle fallback or error UI
            userButtonContainer.innerHTML = '<span>Error loading authentication</span>';
        }

        
    });
}
