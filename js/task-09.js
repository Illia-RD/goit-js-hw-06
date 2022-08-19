function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const colorValueInfo = document.querySelector('span.color');
const changeColorBtn = document.querySelector('.change-color');

function changeColor() {
  body.style.backgroundColor = `${getRandomHexColor()}`;
  body.style.cssText = `
  background-color: ${getRandomHexColor()};
   transition: background-color 300ms;
  `;
}
changeColorBtn.addEventListener('click', changeColor);
