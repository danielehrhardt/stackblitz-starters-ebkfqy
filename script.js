// Function to resize and draw countdown
function resizeAndDrawCountdown() {
  const canvas = document.getElementById('countdownCanvas');
  // Ensure the canvas dimensions match its display size
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;

  const ctx = canvas.getContext('2d');

  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Dynamically set font size based on canvas width
  const fontSize = canvas.width / 20; // Example scaling factor
  ctx.font = `${fontSize}px Arial`; // Adjust font size dynamically
  ctx.fillStyle = '#FFFFFF'; // Example: White color
  ctx.textAlign = 'center'; // Center text horizontally
  ctx.textBaseline = 'middle'; // Center text vertically

  // Calculate countdown (example: New Year's Eve)
  const now = new Date();
  const newYear = new Date(now.getFullYear() + 1, 0, 1);
  const diff = newYear - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  const countdownText = `Countdown: ${days}d ${hours}h ${minutes}m ${seconds}s`;

  // Draw the countdown text at the center of the canvas
  ctx.fillText(countdownText, canvas.width / 2, canvas.height / 2);
}

// Initial draw
resizeAndDrawCountdown();

// Resize and redraw countdown when window resizes
window.addEventListener('resize', resizeAndDrawCountdown);

// Update countdown every second
setInterval(resizeAndDrawCountdown, 1000);
