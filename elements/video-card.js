// Array containing video data
const videos = [
    {
        url: "video.html",
        thumbnail: "https://res.cloudinary.com/dpsssw48o/image/upload/fl_preserve_transparency/v1734275880/90280_ou04id.jpg",
        title: "Wavy X Peaky Blinders",
        channel: "Editx",
        views: "1M views",
        time: "1 hour ago"
    },
    {
        url: "https://www.example.com/video-2",
        thumbnail: "https://res.cloudinary.com/dpsssw48o/image/upload/fl_preserve_transparency/v1734275880/90280_ou04id.jpg",
        title: "Video Title 2",
        channel: "Channel Name 2",
        views: "500K views",
        time: "2 hours ago"
    },
    {
        url: "https://www.example.com/video-3",
        thumbnail: "https://res.cloudinary.com/dpsssw48o/image/upload/fl_preserve_transparency/v1734275880/90280_ou04id.jpg",
        title: "Video Title 3",
        channel: "Channel Name 3",
        views: "500K views",
        time: "5 hours ago"
    },
    // Add more videos as needed
];

// Function to load Video Cards dynamically
function loadVideoCards() {
    const videoContainer = document.getElementById('video-container');

    // Loop through each video in the array and create HTML elements
    videos.forEach(video => {
        // Create the <a> element for the video card
        const videoCard = document.createElement('a');
        videoCard.classList.add('video-card');  // Add a class for styling
        videoCard.href = video.url;            // Set the href to the video's URL
        videoCard.target = "_blank";           // Open the link in a new tab

        // Create the thumbnail <img> element
        const thumbnail = document.createElement('img');
        thumbnail.src = video.thumbnail;      // Set the thumbnail source
        thumbnail.alt = "Video Thumbnail";    // Alt text for accessibility

        // Create the <h3> element for the video title
        const title = document.createElement('h3');
        title.textContent = video.title;      // Set the title text

        // Create the <p> element for the channel, views, and time
        const description = document.createElement('p');
        description.textContent = `${video.channel} • ${video.views} • ${video.time}`;

        // Append all the elements to the video card
        videoCard.appendChild(thumbnail);
        videoCard.appendChild(title);
        videoCard.appendChild(description);

        // Append the video card to the container
        videoContainer.appendChild(videoCard);
    });
}

// Initialize Video Cards when the DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    loadVideoCards(); // Load video cards
});
