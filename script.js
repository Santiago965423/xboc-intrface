document.addEventListener("DOMContentLoaded", () => {
  const tiles = document.querySelectorAll('.tile');
  const expandedTile = document.getElementById('expandedTile');
  const tileTitle = document.getElementById('tileTitle');
  const tileDescription = document.getElementById('tileDescription');
  const tileVideo = document.getElementById('tileVideo');
  const container = document.getElementById('tileContainer');
  const closeButton = document.getElementById('closeBtn');

  tiles.forEach(tile => {
    tile.addEventListener('click', () => {
      tileTitle.textContent = tile.dataset.title;
      tileDescription.textContent = tile.dataset.description;
      tileVideo.src = tile.dataset.video;
      tileVideo.load();
      tileVideo.play();
      expandedTile.style.display = 'flex';
      container.style.display = 'none';
    });
  });

  closeButton.addEventListener('click', () => {
    expandedTile.style.display = 'none';
    tileVideo.pause();
    tileVideo.removeAttribute('src');
    container.style.display = 'flex';
  });
});

// Fondo animado de partículas hacia arriba
const canvas = document.getElementById("particles-bg");
const ctx = canvas.getContext("2d");

let particles = [];
let particleCount = 100;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

for (let i = 0; i < particleCount; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 2 + 1,
    speed: Math.random() * 1 + 0.5,
    opacity: Math.random() * 0.5 + 0.3
  });
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(0,255,0,${p.opacity})`;
    ctx.fill();

    p.y -= p.speed;
    if (p.y < -5) {
      p.y = canvas.height + 5;
      p.x = Math.random() * canvas.width;
    }
  });

  requestAnimationFrame(animateParticles);
}

animateParticles();
