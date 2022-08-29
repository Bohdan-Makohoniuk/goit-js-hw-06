// отримати посилання на елемент 
const inputEl = document.querySelector('#font-size-control');
const outputText = document.querySelector('#text');
outputText.getElementsByClassName.fontSize = '24';
console.dir(inputEl);
inputEl.addEventListener('input',
function () {
    console.log(`${inputEl.value}px`);
    outputText.style.fontSize = `${
        inputEl.value}px`;
    });

    // Репета ...!! 