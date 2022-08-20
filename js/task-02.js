const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.createElement('li');
list.classList.add(name);
list.textContent = 'Potatoes';
document.body.appendChild(list);
console.log(list);


// ingredients.forEach(function (ingredient) {
//     console.log(`categories: ${value.textContent}`);
// });