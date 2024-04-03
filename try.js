// Get all the sliders
const sliders = document.querySelectorAll('.slider');

// Function to start the autoplay
function startAutoplay() {
  sliders.forEach(slider => {
    slider.style.animationPlayState = 'running';
  });
}

// Function to stop the autoplay
function stopAutoplay() {
  sliders.forEach(slider => {
    slider.style.animationPlayState = 'paused';
  });
}

// Start the autoplay when the page loads
window.addEventListener('load', startAutoplay);

// Stop the autoplay when the page is out of focus
window.addEventListener('blur', stopAutoplay);

// Resume the autoplay when the page is back in focus
window.addEventListener('focus', startAutoplay);