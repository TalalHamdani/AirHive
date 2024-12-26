// Initialize Sidebar when the DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    loadSidebar(); // Load the sidebar
});

// Sidebar collapse functionality
function initializeSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const toggleButton = document.getElementById('sidebar-toggle');
    const mainElement = document.querySelector('main');

    // Check and apply saved state from localStorage
    const savedState = localStorage.getItem('sidebarState');
    if (savedState === 'collapsed') {
        sidebar.classList.add('collapsed');
        if (mainElement) mainElement.style.marginLeft = '50px';
    } else {
        sidebar.classList.remove('collapsed');
        if (mainElement) mainElement.style.marginLeft = '200px';
    }

    if (toggleButton) {
        toggleButton.addEventListener('click', function () {
            sidebar.classList.toggle('collapsed'); // Toggle the 'collapsed' class

            if (mainElement) {
                if (sidebar.classList.contains('collapsed')) {
                    mainElement.style.marginLeft = '50px';
                    localStorage.setItem('sidebarState', 'collapsed'); // Save state to localStorage
                } else {
                    mainElement.style.marginLeft = '200px';
                    localStorage.setItem('sidebarState', 'expanded'); // Save state to localStorage
                }
            }
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
