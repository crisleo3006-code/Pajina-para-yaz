const container = document.getElementById("heart-container");

const positions = [
    
    [2,0], [3,0], [7,0], [8,0],

    [1,1], [2,1], [3,1], [4,1],
    [6,1], [7,1], [8,1], [9,1],

    [0,2], [1,2], [2,2], [3,2], [4,2],
    [5,2], [6,2], [7,2], [8,2], [9,2], [10,2],

    [0,3], [1,3], [2,3], [3,3], [4,3],
    [5,3], [6,3], [7,3], [8,3], [9,3], [10,3],

    [1,4], [2,4], [3,4], [4,4], [5,4],
    [6,4], [7,4], [8,4], [9,4],

    [2,5], [3,5], [4,5], [5,5],
    [6,5], [7,5], [8,5],

    [3,6], [4,6], [5,6], [6,6], [7,6],

    [4,7], [5,7], [6,7],

    [5,8]


];

positions.forEach((position, index) => {
    const heart = document.createElement("span");

    heart.classList.add("heart");
    heart.textContent = "❤️";

    heart.style.left = position[0] * 22 + "px";
    heart.style.top = position[1] * 22 + "px";
    heart.style.animationDelay = index * 0.15 + "s";

    container.appendChild(heart);
});

// ===== DATOS CURIOSOS =====

const curiousFacts = [
    "El chocolate tiene compuestos que pueden influir en nuestro estado de ánimo. 🍫",

    "Compartir momentos agradables puede fortalecer los vínculos entre personas. ❤️",

    "El cerebro tiene un sistema de recompensa que responde a experiencias placenteras. 🧠",

    "Los abrazos y el cariño pueden favorecer la sensación de bienestar. 💗",

    "El chocolate contiene sustancias como la teobromina. 🍫"
];

const character = document.getElementById("character");
const curiousText = document.getElementById("curious-text");

character.addEventListener("click", () => {

    const randomIndex = Math.floor(
        Math.random() * curiousFacts.length
    );

    curiousText.textContent = curiousFacts[randomIndex];

    character.classList.toggle("happy");

});

// ===== ABRIR CARTA =====

const openLetter = document.getElementById("open-letter");
const closeLetter = document.getElementById("close-letter");
const loveLetter = document.getElementById("love-letter");

openLetter.addEventListener("click", () => {
    loveLetter.showModal();
});

closeLetter.addEventListener("click", () => {
    loveLetter.close();
});

// ===== ESTRELLITAS =====

const sparkleContainer = document.getElementById("sparkles");

function createSparkle() {

    const sparkle = document.createElement("span");

    sparkle.textContent = "✦";
    sparkle.classList.add("sparkle");

    sparkle.style.left = Math.random() * 100 + "%";
    sparkle.style.top = Math.random() * 100 + "%";

    sparkleContainer.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 2000);
}

setInterval(createSparkle, 400);

// ===== CORAZONES FLOTANTES =====

const floatingContainer =
    document.getElementById("floating-hearts");

function createFloatingHeart() {

    const heart = document.createElement("span");

    heart.classList.add("floating-heart");

    heart.textContent = ["❤️", "💕", "💗", "💖"][
        Math.floor(Math.random() * 4)
    ];

    heart.style.left = Math.random() * 95 + "%";

    heart.style.animationDuration =
        (4 + Math.random() * 3) + "s";

    floatingContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);
}

setInterval(createFloatingHeart, 700);