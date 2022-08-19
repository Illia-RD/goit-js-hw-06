function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const colorValueInfo = document.querySelector('span.color');
const changeColorBtn = document.querySelector('.change-color');

function changeColor() {
  // body.style.backgroundColor = `${getRandomHexColor()}`;
  const randomColor = getRandomHexColor();
  colorValueInfo.textContent = `${randomColor}`;
  body.style.cssText = `
  background-color: ${randomColor};
   transition: background-color 200ms;
  `;
}
changeColorBtn.addEventListener('click', changeColor);
