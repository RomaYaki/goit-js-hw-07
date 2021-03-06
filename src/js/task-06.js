// ## Задание 6

// Напиши скрипт, который бы при потере фокуса на инпуте,
// проверял его содержимое
// на правильное количество символов.
// - Сколько символов должно быть в инпуте,
// указывается в его атрибуте
// `data-length`.
// - Если введено подходящее количество, то`border`
// инпута становится зеленым,
// если неправильное - красным.

// Для добавления стилей, используй CSS - классы
// `valid` и`invalid`.
// ```css
// #validation-input {
//   border: 3px solid #bdbdbd;}
// #validation-input.valid {
//   border-color: #4caf50;}
// #validation-input.invalid {
//   border-color: #f44336;}

const inputArea = document.querySelector('#validation-input');

const validLength = inputArea.dataset.length;
console.log(validLength)

inputArea.addEventListener('blur', () => {
    if (inputArea.value.length !== +validLength) {
        inputArea.classList.add('invalid')    
    }
    else {
        inputArea.classList.remove('invalid')
        inputArea.classList.add('valid')
    }
});
