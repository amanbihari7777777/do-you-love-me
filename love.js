document.addEventListener('DOMContentLoaded', function() {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const response = document.getElementById('response');
    const floatingHearts = document.getElementById('floatingHearts');
    
    // No button escape functionality
    const moveNoButton = () => {
        const buttonWidth = noBtn.offsetWidth;
        const buttonHeight = noBtn.offsetHeight;
        const maxX = window.innerWidth - buttonWidth;
        const maxY = window.innerHeight - buttonHeight;
        
        const newX = Math.random() * maxX;
        const newY = Math.random() * maxY;
        
        noBtn.style.left = newX + 'px';
        noBtn.style.top = newY + 'px';
    };

    noBtn.addEventListener('mouseover', moveNoButton);
    noBtn.addEventListener('click', function() {
        moveNoButton();
        const funnyTexts = [
            "Not a chance!", 
            "Think again!", 
            "Nope!", 
            "Keep trying!", 
            "Never!", 
            "Not today!"
        ];
        noBtn.textContent = funnyTexts[Math.floor(Math.random() * funnyTexts.length)];
    });

    // Yes button functionality
    yesBtn.addEventListener('click', function() {
        response.textContent = "I love you too! 💖";
        response.classList.add('show-response');
        yesBtn.classList.add('pulse');
        noBtn.style.display = 'none';
        
        // Create floating hearts
        createHearts();
        createConfetti();
        
        // Change background
        document.body.style.background = 'linear-gradient(135deg, #ff758c 0%, #ff7eb3 100%)';
        
        // Add romantic messages
        setTimeout(() => {
            const romanticMessages = [
                "You're my everything!",
                "Forever yours...",
                "My heart is yours",
                "Eternally in love",
                "You complete me"
            ];
            showRandomMessage(romanticMessages);
        }, 1500);
    });

    function createHearts() {
        floatingHearts.innerHTML = '';
        for (let i = 0; i < 30; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.classList.add('heart');
                heart.style.left = Math.random() * window.innerWidth + 'px';
                heart.style.bottom = '-30px';
                heart.style.width = 20 + Math.random() * 20 + 'px';
                heart.style.height = heart.style.width;
                heart.style.backgroundColor = ['#ff4d6d', '#ff8fab', '#ffb3c6'][Math.floor(Math.random() * 3)];
                heart.style.animation = `float ${4 + Math.random() * 3}s linear forwards`;
                floatingHearts.appendChild(heart);
                setTimeout(() => heart.remove(), 7000);
            }, i * 300);
        }
        setInterval(createHearts, 10000);
    }

    function createConfetti() {
        const colors = ['#ff4d6d', '#ff8fab', '#ffb3c6', '#4CAF50', '#FFC107'];
        for (let i = 0; i < 150; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.classList.add('confetti');
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.left = Math.random() * window.innerWidth + 'px';
                document.body.appendChild(confetti);
                setTimeout(() => {
                    confetti.style.transform = `translateY(${window.innerHeight}px) rotate(${Math.random() * 360}deg)`;
                    confetti.style.opacity = '0';
                    setTimeout(() => confetti.remove(), 3000);
                }, 10);
            }, i * 20);
        }
    }

    function showRandomMessage(messages) {
        const newMessage = document.createElement('div');
        newMessage.textContent = messages[Math.floor(Math.random() * messages.length)];
        newMessage.style.fontFamily = "'Dancing Script', cursive";
        newMessage.style.fontSize = '1.8rem';
        newMessage.style.color = '#ff4d6d';
        newMessage.style.marginTop = '1rem';
        newMessage.style.opacity = '0';
        newMessage.style.transform = 'translateY(20px)';
        response.insertAdjacentElement('afterend', newMessage);
        setTimeout(() => {
            newMessage.style.opacity = '1';
            newMessage.style.transform = 'translateY(0)';
        }, 100);
    }
});
