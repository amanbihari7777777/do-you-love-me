const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const response = document.getElementById('response');
const hearts = document.getElementById('hearts');
const container = document.querySelector('.buttons');

noBtn.addEventListener('mouseenter', () => {
  const containerRect = container.getBoundingClientRect();
  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;

  const maxX = container.clientWidth - btnWidth;
  const maxY = container.clientHeight - btnHeight;

  const randX = Math.floor(Math.random() * maxX);
  const randY = Math.floor(Math.random() * maxY);

  noBtn.style.left = `${randX}px`;
  noBtn.style.top = `${randY}px`;
});

yesBtn.addEventListener('click', () => {
  response.textContent = 'Yay! I knew it!';
  generateHearts();
});

function generateHearts() {
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animation = `float ${3 + Math.random() * 2}s linear infinite`;
    hearts.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
  }
}
