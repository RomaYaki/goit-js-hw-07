// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в 
// `ul#categories`, то есть
// элементов `li.item`. Получится `'В списке 3 категории.'`.

// Для каждого элемента `li.item` в списке `ul#categories`, найдет 
// и выведет в
// консоль текст заголовка элемента (тега h2) и количество 
// элементов в категории
// (всех вложенных в него элементов `li`).

// Например для первой категории получится:

// - Категория: Животные
// - Количество элементов: 4


function countItems(id) {
    const category = document.querySelector(`ul#${id}`);
    const quontityOfCategory = category.children.length;

    return quontityOfCategory;
}
console.log(`В списке ${countItems('categories')} категории.`);

function itaraitsByClass (className, callback) {
    const categoryElements = document.querySelectorAll(`.${className}`);
    categoryElements.forEach(callback)
}

function visualiseElem(el) {
    const nameOfElements = el.firstElementChild.textContent;

    console.log(`- Категория: ${nameOfElements}`);

    const quontityOfElements = el.querySelectorAll('li').length;

    console.log(`- Количество элементов: ${quontityOfElements}`);
}

itaraitsByClass('item', visualiseElem);
