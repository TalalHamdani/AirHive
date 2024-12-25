
// Initialize Sidebar when the DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    loadSidebar(); // Load the sidebar
});

// Sidebar collapse functionality
function initializeSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const toggleButton = document.getElementById('sidebar-toggle');
    const mainElement = document.querySelector('main');
    console.log(mainElement)
    if (toggleButton) {
        toggleButton.addEventListener('click', function () {
            sidebar.classList.toggle('collapsed'); // Toggle the 'collapsed' class
            if(mainElement) {
                if (sidebar.classList.contains('collapsed')) {
                    mainElement.style.marginLeft = '50px';
                } else {
                    mainElement.style.marginLeft = '200px';
                }
            };
        });
    }
}

// Function to load Sidebar
function loadSidebar() {
    fetch('elements/sidebar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('sidebar').innerHTML = data;
            initializeSidebar(); // Initialize sidebar buttons and features
        });
}
