document.addEventListener('DOMContentLoaded', function() {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const response = document.getElementById('response');
    const hearts = document.querySelectorAll('.heart');
    
    noBtn.addEventListener('mouseover', function() {
        // Move the button to a random position
        const x = Math.random() * (window.innerWidth - 100);
        const y = Math.random() * (window.innerHeight - 50);
        
        noBtn.style.left = x + 'px';
        noBtn.style.top = y + 'px';
    });
    
    noBtn.addEventListener('click', function() {
        // Move again when clicked
        const x = Math.random() * (window.innerWidth - 100);
        const y = Math.random() * (window.innerHeight - 50);
        
        noBtn.style.left = x + 'px';
        noBtn.style.top = y + 'px';
    });
    
    yesBtn.addEventListener('click', function() {
        response.textContent = 'I love you too! ❤️';
        
        // Show all hearts
        hearts.forEach(heart => {
            heart.classList.add('show-heart');
        });
        
        // Hide the no button
        noBtn.style.display = 'none';
        
        // Make hearts pulse
        setInterval(() => {
            hearts.forEach(heart => {
                const scale = 1 + Math.random() * 0.3;
                heart.style.transform = `rotate(-45deg) scale(${scale})`;
            });
        }, 500);
    });
});
