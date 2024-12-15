// Function to load Video Cards dynamically
function loadVideoCards() {
    const videoContainer = document.getElementById('video-container');

    // Fetch the video card HTML content
    fetch('elements/video-card.html')
        .then(response => response.text())
        .then(data => {
            // Append the video card content to the container (5 video cards for example)
            for (let i = 0; i < 5; i++) {
                videoContainer.innerHTML += data;
            }
        })
        .catch(error => console.error('Error loading video cards:', error));
}

// Initialize Video Cards when the DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    loadVideoCards(); // Load video cards
});
