// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

//1. Получаем ссылки на элементы
const valueSpanRef = document.querySelector('#value');

const decrBntRef = document.querySelector('[data-action="decrement"]');
const incrBntRef = document.querySelector('[data-action="increment"]');

let counterValue = 0;

const increment = () => {
    counterValue += 1; // увеличивает значение 
    valueSpanRef.textContent = counterValue; 
};
const decrement = () => {
    counterValue -= 1;
    valueSpanRef.textContent = counterValue; // изменяет значение по ссылке 
}

//  вешаем слушатель событий. При каком событии должена будет выполниться функция 
decrBntRef.addEventListener('click', () =>  decrement() ); // не ожидает аргумент, передавать не нужно
incrBntRef.addEventListener('click', () => increment()); // не ожидает аргумент, передавать не нужно

// incrBntRef.addEventListener('click', increment);
// decrBntRef.addEventListener('click', decrement);


// Свойство dataset - объект всех дата атрибутов которые на них находятся
console.log(decrBntRef.dataset.action); // action идет как ключ , а decrement как свойсвто значения {action : decrement}

// второй метод получить тоже самое - getAttribute('data-action')


