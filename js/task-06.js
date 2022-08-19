// const validTextLength = document.querySelector('[data-length]').getAttribute('data-length');
// const input = document.querySelector;
const validationInput = document.querySelector('#validation-input');
const validTextLength = Number(validationInput.getAttribute('data-length'));
validationInput.addEventListener('blur', checkInput);
function checkInput() {
  if (validTextLength === validationInput.value.length) {
    validationInput.classList.add('valid');
    validationInput.classList.remove('invalid');
  } else {
    validationInput.classList.add('invalid');
    validationInput.classList.remove('valid');
  }
}
