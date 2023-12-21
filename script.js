document.addEventListener('DOMContentLoaded', function () {
    const gameContainer = document.getElementById('game-container');
    const numberOfBubbles = 10;

    for (let i = 0; i < numberOfBubbles; i++) {
        createBubble();
    }

    function createBubble() {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';

        // Set random position
        const randomX = Math.random() * (window.innerWidth - 50);
        const randomY = Math.random() * (window.innerHeight - 50);

        bubble.style.left = `${randomX}px`;
        bubble.style.top = `${randomY}px`;

        bubble.addEventListener('click', function () {
            popBubble(bubble);
        });

        gameContainer.appendChild(bubble);
    }

    function popBubble(bubble) {
        // Play popping animation or simply remove the bubble
        bubble.style.animation = 'pop 0.3s ease-out';
        bubble.addEventListener('animationend', function () {
            gameContainer.removeChild(bubble);
            createBubble(); // Replace popped bubble with a new one
        });
    }
});
