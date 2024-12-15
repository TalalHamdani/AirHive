// Sidebar collapse functionality
document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.querySelector(".sidebar");
    const toggleButton = document.getElementById("sidebar-toggle");

    // Add a click event listener to the toggle button
    toggleButton.addEventListener("click", function () {
        sidebar.classList.toggle("collapsed"); // Add or remove the 'collapsed' class
    });
});
