"use strict";
// для каждого элемента массива ingredients создастm отдельный li,
// вставитm все li за одну операцию в список ul.ingredients.
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
        itemsRef.textContent = ingredient;  // то что приходит из массива 
            console.log(itemsRef)
            return itemsRef;
      });
      
  ingredientslistRef.append(...makeIngredientsList);


