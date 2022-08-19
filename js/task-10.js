const inputField = document.querySelector('input');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');
boxesContainer.style.cssText = `
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 1px;
`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  let BoxesArr = [];
  for (let i = 0; i < amount; i += 1) {
    BoxesArr.push(`<div id="box-${i + 1}" style="background-color: ${getRandomHexColor()};
    width: calc(${i * 10 + 30}px); height: calc(${i * 10 + 30}px)"></div>`);
  }
  return BoxesArr.join('');
  //return `<div id="box-wrap">${BoxesArr.join('')}</div>`; //замінити верхній return на цей для роботи версі очистки 2.
}

btnCreate.addEventListener('click', () => {
  boxesContainer.insertAdjacentHTML('afterbegin', createBoxes(inputField.value));
  inputField.value = 0;
});
btnDestroy.addEventListener('click', () => {
  boxesContainer.innerHTML = '';
  // boxesContainer.querySelector('#box-wrap').remove(); //----- версія очистки контейнера №2.
});
/*btnDestroy.addEventListener('click', () => {
  window.location.reload();
});
//---- версія очистки №3. просто перезавантажує сторінку.*/
