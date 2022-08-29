// Знаходимо посилання на input
// Додаємо слухача подій
const input = document.querySelector('#validation-input');
input.addEventListener('blur', onBlur);
function onBlur(event) {
    // подія що відслідковує по елементно стрічку вводу
    const input = event.currentTarget;
    const inputLength = Number(input.dataset.length);
    if(input.value.length === inputLength){
        input.classList.remove('invalid');
        input.classList.add('valid');
        return;
    }
    else{
        input.classList.remove('valid');
        input.classList.add('invalid');
    }
   
}

