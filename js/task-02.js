const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
  'test',
];


const ingredientsEl = document.querySelector('#ingredients');
const elements = ingredients.map(ingredient => {
  const element = document.createElement('li');
  element.classList.add('item');
  element.textContent = ingredient;
  return element
});
ingredientsEl.append(...elements);
console.log(ingredientsEl);
console.log(elements);
