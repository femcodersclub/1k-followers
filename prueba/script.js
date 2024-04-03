document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        createFireworks();
    }, 1000);
});

function createFireworks() {
    for (let i = 0; i < 50; i++) {
        createFirework();
    }
}

function createFirework() {
    const firework = document.createElement('div');
    firework.classList.add('firework');
    firework.style.left = Math.random() * window.innerWidth + 'px';
    firework.style.top = Math.random() * window.innerHeight + 'px'; /* Agregar un estilo 'top' aleatorio */
    firework.style.animationDuration = (Math.random() * 2 + 1) + 's';
    document.getElementById('fireworks-container').appendChild(firework);
}



