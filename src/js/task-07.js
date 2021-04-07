//Задание 7
// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет
// инлайн-стиль span#text обновляя свойство font-size. 
// В результате при перетаскивании ползунка будет меняться размер текста.


const inputControlRef = document.querySelector('#font-size-control');
const spantextRef =  document.querySelector('#text');
console.dir(inputControlRef)
console.dir(spantextRef)

inputControlRef.addEventListener("input", onInputChange);

function onInputChange(event) {
    spantextRef.style.fontSize = event.currentTarget.value  + "px";
};
