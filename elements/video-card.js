async function loadVideoCards() {
    const videoContainer = document.getElementById('video-container');

    try {
        const response = await fetch('videos.json');
        const videos = await response.json();

        videos.forEach(video => {
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
    } catch (error) {
        console.error('Error loading videos:', error);
    }
}

document.addEventListener('DOMContentLoaded', loadVideoCards);
