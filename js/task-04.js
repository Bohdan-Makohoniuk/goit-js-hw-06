//  Значення за змовчуванням
let counterValue = 0;

// Функція додавання
const increment = () => {
  counterValue += 1;
  document.getElementById('value').textContent = counterValue;
};

// Функція віднімання
const decrement = () => {
  counterValue -= 1;
  document.getElementById('value').textContent = counterValue;
};

// Знайти елемент за data атрибутом, додати відслідкування по кліку
document
  .querySelector("[data-action='increment']")
  .addEventListener('click', increment);
document
  .querySelector("[data-action='decrement']")
  .addEventListener('click', decrement);