// Напиши скрипт для создания галлереи изображений по массиву данных.
// В HTML есть список `ul#gallery`.
// ```html
// <ul id="gallery"></ul>
// ```
// Используй массив объектов `images` для создания тегов `img` вложенных в `li`.
// Для создания разметки используй шаблонные строки и `insertAdjacentHTML()`.
// - Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// - Добавь минимальное оформление галереи флексбоксами или гридами через
//   css-классы.



const images = [
  
    {
        url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',},
  
    {
        url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',},
  
    {
        url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',},
];

const gallaryPlace = document.querySelector('#gallery');

const makeGalaryOptions = options => {
    return options.map(option => {
        const elementLi = document.createElement('li')
        const image = document.createElement('img');

        image.src = option.url;
        image.alt = option.alt;
        
        image.width = 300;
       
        elementLi.append(image);
        return elementLi.outerHTML;
    })  
};

const elements = makeGalaryOptions(images)
console.log(elements.join(''))
gallaryPlace.insertAdjacentHTML('afterbegin', elements.join(''))
