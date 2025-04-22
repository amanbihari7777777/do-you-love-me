document.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const response = document.getElementById('response');
    const floatingHearts = document.getElementById('floatingHearts');

    // Initialize No button position
    moveNoButton();

    function moveNoButton() {
        const buttonWidth = noBtn.offsetWidth;
        const buttonHeight = noBtn.offsetHeight;
        const maxX = window.innerWidth - buttonWidth;
        const maxY = window.innerHeight - buttonHeight;
        
        const newX = Math.random() * (maxX * 0.8) + (maxX * 0.1);
        const newY = Math.random() * (maxY * 0.8) + (maxY * 0.1);
        
        noBtn.style.left = `${newX}px`;
        noBtn.style.top = `${newY}px`;
    }

    noBtn.addEventListener('mouseover', moveNoButton);
    noBtn.addEventListener('click', () => {
        moveNoButton();
        const funnyTexts = ["Try again!", "Nope!", "Not today!", "Maybe later?"];
        noBtn.textContent = funnyTexts[Math.random() * funnyTexts.length | 0];
    });

    yesBtn.addEventListener('click', () => {
        response.textContent = "I love you too! 💖";
        response.classList.add('show-response');
        noBtn.style.display = 'none';
        
        // Create hearts
        for(let i = 0; i < 20; i++) {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.style.left = Math.random() * window.innerWidth + 'px';
            heart.style.animationDelay = Math.random() * 2 + 's';
            floatingHearts.appendChild(heart);
        }
    });
});
