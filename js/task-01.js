// const cat = document.querySelector('#categories');
// console.log(cat);
// const listWithId = document.querySelector('#menu');
// listWithId.style.textTransform = 'uppercase';
// listWithId.style.fontSize = '24px';
// console.log(listWithId);

// const listWithClass = document.querySelector('.menu');
// console.log(listWithClass);

// const menuItemsByTagName = document.querySelectorAll('li');
// console.log(menuItemsByTagName.length);

const numberOfCategories = document.querySelector('#categories');
console.log(numberOfCategories);
const categories = numberOfCategories.querySelectorAll('.item');
console.log(categories);
const result = categories => {
  return categories.querySelector('li');
};
console.log(result(categories));
// console.log(`Number of categories: ${numberOfCategories.length}`);
// const res(numberOfCategories) => {

// }
// const firstMenuItem = document.querySelector('.menu-item');
// firstMenuItem.style.color = 'tomato';
// console.log(firstMenuItem);
