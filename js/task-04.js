/*------------------------------------------------- version 1 -------------------------------------------------*/
//зробив простішу версію прибравши лишню змінну counterValue

const incrementBtn = document.querySelector('#counter button[data-action="increment"]');
const decrementBtn = document.querySelector('#counter button[data-action="decrement"]');
const value = document.querySelector('#value');
incrementBtn.addEventListener('click', () => (value.innerHTML = Number(value.textContent) + 1));
decrementBtn.addEventListener('click', () => (value.innerHTML = Number(value.textContent) - 1));

/*------------------------------------------------- version 2 -------------------------------------------------*/
//версія згідно вимог ТЗ

// let counterValue = 0;
// const decrementBtn = document.querySelector("button[data-action='decrement']");
// const incrementBtn = document.querySelector("button[data-action='increment']");
// const value = document.querySelector('#value');
// decrementBtn.addEventListener('click', () => (value.textContent = counterValue -= 1));
// incrementBtn.addEventListener('click', () => (value.textContent = counterValue += 1));
