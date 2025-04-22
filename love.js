document.addEventListener('DOMContentLoaded', function() {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const response = document.getElementById('response');
    const floatingHearts = document.getElementById('floatingHearts');
    const container = document.querySelector('.container');
    
    // No button escape logic
    noBtn.addEventListener('mouseover', function() {
        const containerRect = container.getBoundingClientRect();
        const maxX = containerRect.width - noBtn.offsetWidth;
        const maxY = containerRect.height - noBtn.offsetHeight;
        
        const newX = Math.random() * maxX;
        const newY = Math.random() * maxY;
        
        noBtn.style.left = newX + 'px';
        noBtn.style.top = newY + 'px';
    });
    
    noBtn.addEventListener('click', function() {
        const containerRect = container.getBoundingClientRect();
        const maxX = containerRect.width - noBtn.offsetWidth;
        const maxY = containerRect.height - noBtn.offsetHeight;
        
        const newX = Math.random() * maxX;
        const newY = Math.random() * maxY;
        
        noBtn.style.left = newX + 'px';
        noBtn.style.top = newY + 'px';
        
        // Add funny text changes
        const funnyTexts = ["Are you sure?", "Think again!", "Really?", "Please?", "I won't accept no!", "Try again!"];
        noBtn.textContent = funnyTexts[Math.floor(Math.random() * funnyTexts.length)];
    });
    
    // Yes button logic
    yesBtn.addEventListener('click', function() {
        response.textContent = "I love you too! 💖";
        response.classList.add('show-response');
        yesBtn.classList.add('pulse');
        noBtn.style.display = 'none';
        
        // Create floating hearts
        createHearts();
        
        // Create confetti
        createConfetti();
        
        // Change background
        document.body.style.background = 'linear-gradient(135deg, #ff758c 0%, #ff7eb3 100%)';
        
        // Add romantic message
        setTimeout(() => {
            const romanticMessages = [
                "You make my heart skip a beat!",
                "Forever yours...",
                "My heart belongs to you",
                "You're my everything",
                "Love you to the moon and back"
            ];
            const randomMessage = romanticMessages[Math.floor(Math.random() * romanticMessages.length)];
            
            const newMessage = document.createElement('div');
            newMessage.textContent = randomMessage;
            newMessage.style.fontFamily = "'Dancing Script', cursive";
            newMessage.style.fontSize = '1.8rem';
            newMessage.style.color = '#ff4d6d';
            newMessage.style.marginTop = '1rem';
            newMessage.style.opacity = '0';
            newMessage.style.transform = 'translateY(20px)';
            newMessage.style.transition = 'all 0.5s ease';
            
            response.insertAdjacentElement('afterend', newMessage);
            
            setTimeout(() => {
                newMessage.style.opacity = '1';
                newMessage.style.transform = 'translateY(0)';
            }, 100);
        }, 1500);
    });
    
    function createHearts() {
        const numberOfHearts = 10;
        for (let i = 0; i < numberOfHearts; i++) {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.style.left = `${Math.random() * 100}%`;
            heart.style.animation = `float ${Math.random() * 5 + 3}s linear infinite`;
            floatingHearts.appendChild(heart);
        }
    }
    
    function createConfetti() {
        const numberOfConfetti = 50;
        for (let i = 0; i < numberOfConfetti; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.left = `${Math.random() * 100}%`;
            confetti.style.animation = `pulse 1s ease-in-out ${Math.random() * 5}s infinite`;
            floatingHearts.appendChild(confetti);
        }
    }
});
