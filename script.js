document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    createFireworks();
    typeWriterEffect("¡Gracias por ser parte de nuestros 1000 seguidores!", [
      "#FFFFFF",
      "#fdfeff"
    ]);
  }, 1000);
});

function createFireworks() {
  const colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "purple",
    "orange",
    "indigo",
    "cyan",
    "magenta",
    "turquoise",
    "pink",
    "lime",
  ];

  for (let i = 0; i < 50; i++) {
    createFirework(colors[Math.floor(Math.random() * colors.length)]);
  }
}

function createFirework(color) {
  const firework = document.createElement("div");
  firework.classList.add("firework");
  firework.classList.add(color);
  firework.style.left = Math.random() * window.innerWidth + "px";
  firework.style.top = Math.random() * window.innerHeight + "px";
  firework.style.animationDuration = Math.random() * 2 + 1 + "s";
  document.getElementById("fireworks-container").appendChild(firework);

  setTimeout(() => {
    firework.style.transform = "scale(0)";
  }, 100);
}

function typeWriterEffect(text, colors) {
  const textElement = document.getElementById("typing-text");
  let index = 0;

  function type() {
    if (index < text.length) {
      textElement.innerHTML += `<span style="color: ${
        colors[index % colors.length]
      };">${text.charAt(index)}</span>`;
      index++;
      setTimeout(type, 50);
    }
  }

  type();
}
