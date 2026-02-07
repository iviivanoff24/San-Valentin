const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const questionScreen = document.getElementById('question-screen');
const successScreen = document.getElementById('success-screen');
const mainContainer = document.getElementById('main-container');

// Phrases for the No button
const noPhrases = [
    "No",
    "¿Estás segura?",
    "¿De verdad?",
    "¡Piénsalo bien!",
    "¡Di que sí!",
    "¡Por favor!",
    "¡No seas mala!",
    "¡Voy a llorar 😢!",
    "¡Rompes mi corazón!",
    "¡Anda, di que sí!"
];

let noClickCount = 0;
let yesScale = 1;

noBtn.addEventListener('click', () => {
    noClickCount++;

    // Update No button text
    if (noClickCount < noPhrases.length) {
        noBtn.innerText = noPhrases[noClickCount];
    } else {
        noBtn.innerText = "¡Por fis!";
    }

    // Shrink No button
    const currentFontSize = parseFloat(window.getComputedStyle(noBtn).fontSize);
    // Be careful not to make it negative, causing errors
    const newFontSize = Math.max(0, currentFontSize - 2); 
    noBtn.style.fontSize = newFontSize + 'px';
    
    // Grow Yes button
    yesScale += 0.5; // Increase scale
    yesBtn.style.transform = `scale(${yesScale})`;
    
    // Adjust margin to handle overlap if it gets too big
    // On mobile we might want to be careful with huge gaps
    const gap = 20 + (yesScale * 5);
    document.querySelector('.buttons').style.gap = `${gap}px`;

    // If clicked too many times (e.g., 8 times), hide No button and center Yes
    if (noClickCount >= 8 || newFontSize <= 0) {
        noBtn.style.display = 'none';
        yesBtn.innerText = "¡CLARO QUE SÍ! ❤️";
        
        // Reset scale but make it big via font-size or width for better responsiveness
        yesBtn.style.transform = "scale(1)"; 
        yesBtn.style.fontSize = "2rem";
        yesBtn.style.width = "100%";
        yesBtn.style.maxWidth = "100%";
    }
});

yesBtn.addEventListener('click', () => {
    // Confetti effect
    if (typeof confetti === 'function') {
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#ff4d6d', '#ff8fa3', '#ffffff']
        });
    }

    // Timed transition
    setTimeout(() => {
        questionScreen.classList.add('hidden');
        successScreen.classList.remove('hidden');
        successScreen.classList.add('final-message');
        
        // More confetti continuously for a bit
        const duration = 3000;
        const end = Date.now() + duration;

        (function frame() {
            if (typeof confetti === 'function') {
                confetti({
                    particleCount: 5,
                    angle: 60,
                    spread: 55,
                    origin: { x: 0 },
                    colors: ['#ff4d6d', '#ff8fa3']
                });
                confetti({
                    particleCount: 5,
                    angle: 120,
                    spread: 55,
                    origin: { x: 1 },
                    colors: ['#ff4d6d', '#ff8fa3']
                });
            }

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        }());

    }, 200);
});

// Background floating hearts
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('floating-heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 4 + 's';
    heart.style.fontSize = Math.random() * 20 + 10 + 'px';
    
    document.getElementById('hearts-container').appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}

// Start hearts loop
setInterval(createHeart, 600);
