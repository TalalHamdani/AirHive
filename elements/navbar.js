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
}

// window.addEventListener('load', async () => {
//     await Clerk.load();
//     console.log('Clerk loaded');
//     const userbuttonDiv = document.getElementById('user-button')
//     clerk.mountUserButton(userbuttonDiv)

//     // Check if the user is signed in
//     if (Clerk.user) {
//         document.getElementById('app').innerHTML = `
//           <div id="user-button"></div>
//         `
  
//         const userButtonDiv = document.getElementById('user-button')
  
//         Clerk.mountUserButton(userButtonDiv)
//       } else {
//         document.getElementById('app').innerHTML = `
//           <div id="sign-in"></div>
//         `
  
//         const signInDiv = document.getElementById('sign-in')
  
//         Clerk.mountSignIn(signInDiv)
//       }
// });
