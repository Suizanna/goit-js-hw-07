//Задание 8
//Cкрипт создания и очистки коллекции элементов.

const refs = {
    inputSumElements: document.querySelector('#controls input'),
    renderCollection: document.querySelector('button[data-action="render"]'),
    clearCollection: document.querySelector('button[data-action="destroy"]'),
    boxesAmount: document.querySelector('#boxes'),
  };
  refs.renderCollection.addEventListener('click', () => createBoxes(refs.inputSumElements.value));

  refs.clearCollection.addEventListener('click', destroyBoxes);

  function getRandomInt() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  
  function createBoxes(amount) {
    const divBoxes = [];
    for (let i = 0; i < amount; i += 1) {
      const size = 30 + i * 10;
      const element = document.createElement('div');
        element.style.backgroundColor = getRandomInt();
        element.style.width = `${size}px`;
        element.style.height = `${size}px`;
        divBoxes.push(element);
    }
    refs.boxesAmount.append(...divBoxes);
  }
  
  function destroyBoxes() {
    refs.inputSumElements.value = '';
    refs.boxesAmount.innerHTML = '';
  }
  




