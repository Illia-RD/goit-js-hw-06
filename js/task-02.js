const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const listIngridients = ingredients.map(ingredient => {
  const listIngridient = document.createElement('li');
  listIngridient.textContent = ingredient;
  listIngridient.classList.add('item');
  return listIngridient;
});
document.querySelector('#ingredients').append(...listIngridients);
