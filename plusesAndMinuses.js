// When a user clicks the + element, the count should increase by 1 on screen.
// When a user clicks the – element, the count should decrease by 1 on screen.

let counter = 0;
const plusEl = document.getElementById('plus');
plusEl.addEventListener('click', () => {
counter++;
console.log(`count is ${counter}`);
let count = document.getElementById('count')
count.innerText = counter
});

const minusEl = document.getElementById('minus');
minusEl.addEventListener('click', () => {
counter--;
console.log(`count is ${counter}`);
let count = document.getElementById('count')
count.innerText = counter
});