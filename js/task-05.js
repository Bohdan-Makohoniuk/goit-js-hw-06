//  Репета урок 2 DOM 6 урок 2 половина уроку 

// Знахйти посилання на інтерактивні елементи
const inp = document.querySelector('#name-input');
const title = document.querySelector('#name-output');

inp.addEventListener('input', newInp);
function newInp(letter) {
    title.textContent = letter.currentTarget.value;
    if (letter.currentTarget.value === " ") {
        // Значення за змовчуванням
        title.textContent = "Anonymous";
    }
};