// Array containing video data
const videos = [
    {
<<<<<<< HEAD
        url: "https://www.youtube.com",
        thumbnail: "https://res.cloudinary.com/dpsssw48o/image/upload/v1734275880/90280_ou04id.jpg",
        title: "Video Title 1",
        channel: "Channel Name 1",
        views: "1M views",
        time: "1 hour ago",
        category: "Vertical" // Add a category
    },
    {
        url: "https://www.example.com/video-2",
        thumbnail: "https://res.cloudinary.com/dpsssw48o/image/upload/v1734275880/90280_ou04id.jpg",
        title: "Video Title 2",
        channel: "Channel Name 2",
        views: "500K views",
        time: "2 hours ago",
        category: "Horizontal" // Add a category
    },
    {
        url: "https://www.example.com/video-2",
        thumbnail: "https://res.cloudinary.com/dpsssw48o/image/upload/v1734275880/90280_ou04id.jpg",
        title: "Video Title 3",
        channel: "Channel Name 2",
        views: "500K views",
        time: "2 hours ago",
        category: "Horizontal" // Add a category
    },
    {
        url: "https://www.example.com/video-3",
        thumbnail: "https://res.cloudinary.com/dpsssw48o/image/upload/v1734275880/90280_ou04id.jpg",
        title: "Video Title 4",
        channel: "Channel Name 3",
        views: "300K views",
        time: "3 hours ago",
        category: "Vertical" // Add a category
    }
    // Add more videos as needed
];

// Function to dynamically generate video cards
function loadVideoCards() {
    const videoContainer = document.getElementById('video-container');

    // Loop through each video in the array
    videos.forEach(video => {
        // Create the <a> element for the video card
        const videoCard = document.createElement('a');
        videoCard.classList.add('video-card'); // Add a class for styling
        videoCard.href = video.url; // Set the href to the video's URL
        videoCard.target = "_blank"; // Open the link in a new tab

        // Create the thumbnail <img> element
        const thumbnail = document.createElement('img');
        thumbnail.src = video.thumbnail; // Set the thumbnail source
        thumbnail.alt = "Video Thumbnail"; // Alt text for accessibility

        // Create the <h3> element for the video title
        const title = document.createElement('h3');
        title.textContent = video.title; // Set the title text
=======
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
>>>>>>> ahmad

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
document.addEventListener('DOMContentLoaded', loadVideoCards);

//Filtering logic
document.addEventListener("DOMContentLoaded", function () {
    const videoContainer = document.getElementById("video-container");
    const categoryButtons = document.querySelectorAll(".categories button");
    let selectedCategory = "All"; // Keep track of the currently selected category

    // Function to display videos based on the selected category
    function filterVideos(category) {
        const videoCards = Array.from(videoContainer.children);

        videoCards.forEach(card => {
            const videoCategory = card.getAttribute("data-category");

            // Show videos that match the selected category or "All"
            if (category === "All" || videoCategory === category) {
                card.classList.remove("hidden");
            } else {
                card.classList.add("hidden");
            }
        });
    }

    // Function to handle category button clicks
    function handleCategoryClick(button) {
        const category = button.getAttribute("data-category");

        if (selectedCategory !== category) {
            // Update the selected category
            selectedCategory = category;

            // Deselect all buttons and highlight the clicked one
            categoryButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            // Update the displayed videos
            filterVideos(category);
        }
    }

    // Function to initialize video cards
    function initializeVideos() {
        videoContainer.innerHTML = ""; // Clear existing videos
        videos.forEach(video => {
            const videoCard = document.createElement("a");
            videoCard.classList.add("video-card");
            videoCard.href = video.url;
            videoCard.target = "_blank";
            videoCard.setAttribute("data-category", video.category); // Add category as data attribute

            const thumbnail = document.createElement("img");
            thumbnail.src = video.thumbnail;
            thumbnail.alt = "Video Thumbnail";

            const title = document.createElement("h3");
            title.textContent = video.title;

            const description = document.createElement("p");
            description.textContent = `${video.channel} • ${video.views} • ${video.time}`;

            videoCard.appendChild(thumbnail);
            videoCard.appendChild(title);
            videoCard.appendChild(description);

            videoContainer.appendChild(videoCard);
        });
    }

    // Initialize all videos
    initializeVideos();

    // Event listeners for category buttons
    categoryButtons.forEach(button => {
        button.addEventListener("click", () => handleCategoryClick(button));
    });
});
