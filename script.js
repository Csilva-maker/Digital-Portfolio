function toggleImagens(className) {
    // Select all elements that have this class name
    var frames = document.getElementsByClassName(className);
    
    // Loop through every element found in the collection
    for (var i = 0; i < frames.length; i++) {
        if (frames[i].style.display === 'none' || frames[i].style.display === '') {
            frames[i].style.display = 'inline-block'; // Or 'block' depending on layout preference
        } else {
            frames[i].style.display = 'none';
        }
    }
}

function toggleVideo(videoId, button) {
    const video = document.getElementById(videoId);

    if (video.style.display === 'none' || video.style.display === '') {
        // Open and Play the video
        video.style.display = 'block';
        video.play();
        button.textContent = 'Close Video';
    } else {
        // Pause, Reset, and Hide the video
        video.pause();
        video.currentTime = 0; // Rewinds video back to the beginning
        video.style.display = 'none';
        button.textContent = 'Play Video';
    }
}
function toggleImage(frameId) {
        var frame = document.getElementById(frameId);
        frame.style.display = frame.style.display === 'none' ? 'block' : 'none';
    }
    