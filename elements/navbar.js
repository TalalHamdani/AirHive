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
            // Load Clerk
            await Clerk.load();
            console.log("Clerk loaded");
    
            if (Clerk.user) {
                console.log("User is signed in");
    
                // Dynamically add the UserButton
                document.getElementById("app").innerHTML = `
                    <div id="user-button"></div>
                `;
    
                const userButtonDiv = document.getElementById("user-button");
                Clerk.mountUserButton(userButtonDiv);
    
                // Hide the sign-in button if the user is logged in
                document.getElementById("sign-in-page").style.display = "none";
            } else {
                console.log("User is not signed in");
    
                // Show the sign-in button if the user is not logged in
                document.getElementById("sign-in-page").style.display = "block";
            }
        } catch (error) {
            console.error("Error loading Clerk:", error);
        }
    });
    
    
}
