console.log('Navbar script loaded');

// Call this function in home.js when the page is loaded
document.addEventListener('DOMContentLoaded', function () {
    loadNavbar(); // Load the navbar
    initializeNavbar(); // Initialize the Navbar and Dark Mode
});

// Function to load Navbar
function loadNavbar() {
    fetch('elements/navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar').innerHTML = data;
            initializeNavbar(); // Initialize navbar buttons and features
        })
        .catch(error => console.error('Error loading navbar:', error));
}

// Function to initialize Navbar and Dark Mode toggle
function initializeNavbar() {
    const savedMode = localStorage.getItem('mode');
    const toggleButton = document.getElementById('mode-toggle');

    if (savedMode === 'dark') {
        document.body.classList.add('dark-mode');
        toggleButton.textContent = '☀️'; // Sun icon for dark mode (to switch to light)
    } else {
        document.body.classList.remove('dark-mode');
        toggleButton.textContent = '🌙'; // Moon icon for light mode (to switch to dark)
    }

    toggleButton.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
        const isDarkMode = document.body.classList.contains('dark-mode');
        toggleButton.textContent = isDarkMode ? '☀️' : '🌙';
        localStorage.setItem('mode', isDarkMode ? 'dark' : 'light');
        console.log('Mode changed');
    });

    window.addEventListener("load", async function () {
        try {
            // Load Clerk SDK
            await Clerk.load();
            console.log("Clerk loaded");
    
            const userButtonContainer = document.getElementById("user-button-container");
            const signInButton = document.getElementById("sign-in-page");
    
            // Function to update the UI based on login state
            const updateUI = () => {
                setTimeout(() => {
                    if (Clerk.user) {
                        console.log("User is signed in (session detected)");
            
                        // Mount UserButton
                        userButtonContainer.innerHTML = ""; // Clear existing content
                        Clerk.mountUserButton(userButtonContainer);
                        signInButton.style.display = "none";
                    } else {
                        console.log("User is not signed in (no session detected)");
            
                        // Show Sign-In button
                        userButtonContainer.innerHTML = ""; // Clear existing content
                        signInButton.style.display = "block";
                    }
                }, 100); // Delay to ensure session state sync
            };
            
    
            // Initial UI update
            updateUI();
    
            // Listen for real-time authentication state changes
            Clerk.addListener("auth:change", () => {
                console.log("Auth state changed");
                updateUI();
            });
        } catch (error) {
            console.error("Error initializing Clerk:", error);
        }
    });    

}
