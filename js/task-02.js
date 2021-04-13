"use strict";
// В HTML есть пустой список ul#ingredients.
// <ul id="ingredients"></ul>
// Для каждого элемента массива ingredients создаст отдельный li,
// Вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM-узлов используй document.createElement().

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  const ingredientslistRef = document.querySelector('#ingredients');

  const makeIngredientsList = ingredients.map(ingredient => {
        const itemsRef =  document.createElement('li'); //создаем <li> теkстовым значением которого будет itemsRef.textContent = ingredient
        itemsRef.textContent = ingredient;  
    console.log(itemsRef);
});
    
ingredientslistRef.append(...makeIngredientsList);