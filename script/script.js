const img = document.getElementById('floatingImage');
let x = 0;
let y = 0;
let dx = 2;   // speed in X direction
let dy = 1.5; // speed in Y direction

function moveImage() {
    const width = window.innerWidth - img.offsetWidth;
    const height = window.innerHeight - img.offsetHeight;

    x += dx;
    y += dy;

    // Bounce off edges
    if (x >= width || x <= 0) dx = -dx;
    if (y >= height || y <= 0) dy = -dy;

    // Move and rotate simultaneously
    const rotation = (x + y) % 360; // rotation angle
    img.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg)`;

    requestAnimationFrame(moveImage);
}

// Start the animation
moveImage();
