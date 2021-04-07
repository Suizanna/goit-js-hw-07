"use strict";
// Напиши скрипт, который выполнит следующие операции.
// Посчитает и выведет в консоль количество категорий в ul#categories, 
// то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, 
// найдет и выведет в консоль текст заголовка элемента (тега h2) 
// и количество элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:
// Категория: Животные
// Количество элементов: 4.

const categoriesAndElements = () => {
    const categoriesRef = document.querySelectorAll(".item");
    console.log(`В списке ${categoriesRef.length} категории`);

    categoriesRef.forEach(element => {
        console.log(`Категория: ${element.querySelector("h2").textContent}`);
        console.log(`Колочество элементов: ${element.querySelectorAll("li").length}`);
// // 2 вар
    // categoriesRef.forEach(element => {
    //   console.log(`Категория: ${element.firstElementChild.textContent}`)
    //    console.log(`Количество элементов: ${element.lastElementChild.children.length}`);

    });

}
categoriesAndElements();









