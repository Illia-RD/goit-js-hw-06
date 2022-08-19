const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', submit);

function submit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === '' || password.value === '') {
    return alert(
      'УВАГА! Поля email і password повинні бути заповнені!\n\nWARNING! Email and password fields must be filled!'
    );
  }
  const userData = { email: email.value, password: password.value };
  console.log(userData);
  event.currentTarget.reset();
}
