document.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const response = document.getElementById('response');
    const floatingHearts = document.getElementById('floatingHearts');

    // Get initial position of No button
    let isFirstInteraction = true;
    let initialPosition = null;

    function moveNoButton() {
        if(isFirstInteraction) {
            // Switch to fixed positioning after first interaction
            const rect = noBtn.getBoundingClientRect();
            noBtn.style.position = 'fixed';
            noBtn.style.left = rect.left + 'px';
            noBtn.style.top = rect.top + 'px';
            isFirstInteraction = false;
        }

        const buttonWidth = noBtn.offsetWidth;
        const buttonHeight = noBtn.offsetHeight;
        const maxX = window.innerWidth - buttonWidth;
        const maxY = window.innerHeight - buttonHeight;
        
        const newX = Math.random() * maxX;
        const newY = Math.random() * maxY;
        
        noBtn.style.left = newX + 'px';
        noBtn.style.top = newY + 'px';
    }

    noBtn.addEventListener('mouseover', moveNoButton);
    noBtn.addEventListener('click', () => {
        moveNoButton();
        const funnyTexts = ["Not quite!", "Try again!", "Nope!", "Maybe later?"];
        noBtn.textContent = funnyTexts[Math.floor(Math.random() * funnyTexts.length)];
    });

    yesBtn.addEventListener('click', () => {
        response.textContent = "I love you too! 💖";
        response.classList.add('show-response');
        noBtn.style.display = 'none';
        
        // Create floating hearts
        for(let i = 0; i < 20; i++) {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.style.left = Math.random() * window.innerWidth + 'px';
            heart.style.animationDelay = Math.random() * 2 + 's';
            floatingHearts.appendChild(heart);
        }
    });
});
