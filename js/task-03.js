// Taks 3
//  Напиши скрипт для создания галлереи изображений по массиву данных.
//  В HTML есть список ul#gallery.
//  Используй массив объектов images для создания тегов img вложенных в li.
//  Для создания разметки используй шаблонные строки и insertAdjacentHTML().
//  Все элементы галереи должны добавляться в DOM за одну операцию вставки.
//  Добавь минимальное оформление галереи флексбоксами или гридами через css-классы. `` 

const images = [
    {
      url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];

  const galleryRef = document.querySelector('#gallery');
  console.log(galleryRef);
  const  createGallery = ({ url, alt }) => {
  return `<li> <img src = '${url}', alt = '${alt}' width='300' height='200'> </li>`;
  }

  // добавляем в DOM  
const createImages = images.map(createGallery).join(' '); 

galleryRef.insertAdjacentHTML(`beforeend`, createImages);
galleryRef.setAttribute("style", "list-style-type:none;");
console.log(createImages);

// 2
// const getListId = document.getElementById('gallery');

// getListId.style.display = 'flex';
// getListId.style.alignItems = 'center';
// getListId.style.justifyContent = 'space-between';

// const createListItem = images.map(image => {
//   const itemEl = document.createElement('li');
//   itemEl.style.listStyle = 'none';
//   itemEl.insertAdjacentHTML(
//     'afterbegin',
//     `<img src='${image.url}' alt='${image.alt}' width='400px'>`,
//   );

//   return itemEl;
// });

// getListId.append(...createListItem);


