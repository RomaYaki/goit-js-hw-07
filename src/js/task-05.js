// Напиши скрипт который, при наборе текста в 
// инпуте`input#name-input`(событие
// input), подставляет его текущее значение в 
// `span#name-output`.Если инпут
// пустой, в спане должна отображаться строка `'незнакомец'`.

// ```html
// <input type="text" placeholder="Ваше имя?" id="name-input" />
// <h1>Привет, <span id="name-output">незнакомец</span>!</h1>
// ```

const inputArea = document.querySelector('#name-input')
const nameCreate = document.querySelector('#name-output')

inputArea.addEventListener('input', createInputName);

function createInputName(event) {
    const value = event.currentTarget.value;
    if (value) {
        nameCreate.textContent = value;
    } else {
        nameCreate.textContent = 'незнакомец'  
    }
};

