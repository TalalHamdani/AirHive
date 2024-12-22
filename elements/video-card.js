// Array containing video data
const videos = [
    {
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
    let selectedCategories = []; // Array to keep track of selected categories

    // Function to display videos based on selected categories
    function filterVideos() {
        const videoCards = Array.from(videoContainer.children);

        videoCards.forEach(card => {
            const videoCategory = card.getAttribute("data-category");

            // Show videos that match any of the selected categories
            if (selectedCategories.length === 0 || selectedCategories.includes(videoCategory)) {
                card.classList.remove("hidden");
            } else {
                card.classList.add("hidden");
            }
        });
    }

    // Function to handle category button clicks
    function handleCategoryClick(button) {
        const category = button.getAttribute("data-category");

        if (category === "All") {
            // If "All" is selected, clear all other selections
            selectedCategories = [];
            categoryButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
        } else {
            // Toggle the category selection
            const categoryIndex = selectedCategories.indexOf(category);
            if (categoryIndex > -1) {
                // If the category is already selected, deselect it
                selectedCategories.splice(categoryIndex, 1);
                button.classList.remove("active");
            } else {
                // Otherwise, select the category
                selectedCategories.push(category);
                button.classList.add("active");

                // Deselect "All" if another category is selected
                const allButton = document.querySelector('button[data-category="All"]');
                if (allButton) {
                    allButton.classList.remove("active");
                }
            }
        }

        // Update the displayed videos
        filterVideos();
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
