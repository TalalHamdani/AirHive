let videos = []; // Store all videos for filtering later

async function loadVideoCards() {
    const videoContainer = document.getElementById('video-container');

    try {
        const response = await fetch('videos.json');
        videos = await response.json(); // Store the fetched videos
        displayVideos(videos); // Initially display all videos
    } catch (error) {
        console.error('Error loading videos:', error);
    }
}

function displayVideos(videoList) {
    const videoContainer = document.getElementById('video-container');
    videoContainer.innerHTML = ''; // Clear previous videos

    if (videoList.length === 0) {
        videoContainer.innerHTML = '<p>No videos found for this category.</p>';
        return;
    }

    videoList.forEach(video => {
        const videoCard = document.createElement('a');
        videoCard.classList.add('video-card');
        videoCard.href = `${video.url}?source=${encodeURIComponent(video.source)}`;
        videoCard.target = "_blank";

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

document.addEventListener('DOMContentLoaded', () => {
    loadVideoCards();

    const categoryButtons = document.querySelectorAll('.categories button');
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category'); // Use data-category attribute
            if (category === 'All') {
                displayVideos(videos); // Show all videos
            } else {
                const filteredVideos = videos.filter(video => video.category === category);
                displayVideos(filteredVideos);
            }
        });
    });
});
