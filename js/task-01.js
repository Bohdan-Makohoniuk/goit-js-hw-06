// Визначає кількість категорій

const ItemsEl = document.querySelectorAll('.item');
const liItemEl = ItemsEl.length
console.log(` Number of categories:${liItemEl}`);

// Додає заголовки h2

const valuesEl = document.querySelectorAll('h2');
valuesEl.forEach(function (value) {
    console.log(`categories: ${value.textContent}`);
});

// Рахує кількість li в одні категорії
const list = document.querySelectorAll('#categories');
const listEl = document.querySelectorAll('ul');
listEl.forEach(function (value) {
    console.log(`Elements: ${value.length}`);
});
console.log(listEl);




 
