// ## Задание 4

// Счетчик состоит из спана и кнопок,
// которые должны увеличивать и уменьшать
// значение счетчика на `1`.

// - Создай переменную`counterValue`
// в которой будет хранится текущее значение
//   счетчика.
// - Создай функции`increment` и`decrement`
// для увеличения и уменьшения значения
// счетчика
// - Добавь слушатели кликов на кнопки,
// вызовы функций и обновление интерфейса

// ```html
// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>
// ```


const counterValue = document.querySelector('#value');
const buttons = document.querySelectorAll('#counter button')

const decrementBtn = buttons[0];
const incrementBtn = buttons[1];


decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);

function decrement(event) {
    counterValue.textContent -= 1;
};

function increment(event) {
    counterValue.textContent = +counterValue.textContent + 1;
};
