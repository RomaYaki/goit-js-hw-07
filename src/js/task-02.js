// В HTML есть пустой список `ul#ingredients`.

// ```html
// <ul id="ingredients"></ul>
// ```

// В JS есть массив строк.

// ```js
// const ingredients = [
//   'Картошка',
//   'Грибы',
//   'Чеснок',
//   'Помидоры',
//   'Зелень',
//   'Приправы',
// ];
// ```

// Напиши скрипт, который для каждого элемента массива
// `ingredients` создаст отдельный `li`,
// после чего вставит все `li` за одну операцию в
// список `ul.ingredients`.Для создания DOM - узлов
// используй `document.createElement()`.

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ulVariable = document.querySelector('#ingredients');

const makeLiOptions = contents => contents.map(text => {
    const elementLi = document.createElement('li');
    elementLi.innerHTML = text;
    return elementLi;
});
const elements = makeLiOptions(ingredients);

ulVariable.append(...elements);






// const makeLiFunc = arr => {
//     return arr.forEach(elem => {
//         const elementLi = document.createElement('li');
//         elementLi.textContent = arr.elem

//         return elementLi;
//     });
// };

// const elements = makeLiFunc(ingredients);



