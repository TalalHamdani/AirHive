let videos = []; // Store all videos for filtering later

// Load videos and display them
async function loadVideoCards() {
    const videoContainer = document.getElementById('video-container');

    try {
        const response = await fetch('videos.json');
        videos = await response.json(); // Store the fetched videos
        console.log('Videos loaded:', videos); // Debugging: Log the loaded videos
        displayVideos(videos); // Initially display all videos
    } catch (error) {
        console.error('Error loading videos:', error);
        videoContainer.innerHTML = '<p>Error loading videos. Please try again later.</p>';
    }
}

// Display videos on the page
function displayVideos(videoList) {
    const videoContainer = document.getElementById('video-container');
    videoContainer.innerHTML = ''; // Clear previous videos

    if (videoList.length === 0) {
        videoContainer.innerHTML = '<p>No videos found for this category.</p>';
        return;
    }

    videoList.forEach(video => {
        // Ensure all video properties are present
        if (!video.url || !video.source || !video.thumbnail || !video.title || !video.channel || !video.views || !video.time) {
            console.warn('Missing properties in video object:', video); // Debugging: Warn about incomplete data
            return;
        }

        const videoCard = document.createElement('a');
        videoCard.classList.add('video-card');

        // Generate URL with additional query parameters
        const videoUrl = `${video.url}?source=${encodeURIComponent(video.source)}&title=${encodeURIComponent(video.title)}&channel=${encodeURIComponent(video.channel)}&views=${encodeURIComponent(video.views)}&time=${encodeURIComponent(video.time)}`;
        videoCard.href = videoUrl;
        videoCard.target = "_blank";

        console.log('Generated URL:', videoUrl); // Debugging: Log generated URLs

        const thumbnail = document.createElement('img');
        thumbnail.src = video.thumbnail;
        thumbnail.alt = "Video Thumbnail";

        const title = document.createElement('h3');
        title.textContent = video.title;

        const description = document.createElement('p');
        description.textContent = `${video.channel} • ${video.views} • ${video.time}`;

        videoCard.appendChild(thumbnail);
        videoCard.appendChild(title);
        videoCard.appendChild(description);

        videoContainer.appendChild(videoCard);
    });
}

// Initialize event listeners and load videos
document.addEventListener('DOMContentLoaded', () => {
    loadVideoCards();

    const categoryButtons = document.querySelectorAll('.categories button');
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category'); // Use data-category attribute
            console.log('Category selected:', category); // Debugging: Log selected category
            filterVideos(category);
        });
    });
});

// Video Player Page Logic
document.addEventListener('DOMContentLoaded', () => {
    const videoPlayer = document.getElementById('videoPlayer');
    const videoSource = document.getElementById('videoSource');
    if (!videoPlayer || !videoSource) {
        console.error('Video player or source element not found in DOM.');
        return;
    }

    const params = new URLSearchParams(window.location.search);
    const videoPath = params.get('source');

    if (videoPath) {
        console.log('Video source from URL:', videoPath); // Debugging: Log the video source
        videoSource.src = decodeURIComponent(videoPath); // Decode and set the video source
        videoPlayer.load(); // Load the video
    } else {
        console.error('No video source provided in the URL.');
        document.body.innerHTML = '<p>Invalid video URL. Please select a video from the main page.</p>';
    }

    // Add error handling for video loading
    videoPlayer.addEventListener('error', (e) => {
        console.error('Error loading the video:', e);
        alert('Unable to load the video. Please try again later.');
    });
});

//Filter videos
function filterVideos(category) {
    if (category === 'All') {
        displayVideos(videos); // Show all videos if "All" is selected
    } else {
        // Filter videos based on the selected category
        const filteredVideos = videos.filter(video => {
            console.log('Video category:', video.category, 'Filter category:', category); // Debugging: Log categories
            return video.category === category;
        });

        if (filteredVideos.length === 0) {
            console.warn('No videos found for category:', category); // Debugging: Warn if no matches
        }

        // Display only the filtered videos
        displayVideos(filteredVideos);
    }
}
