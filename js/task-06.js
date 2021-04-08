//Задание 6
// Напиши скрипт, который бы при потере фокуса на инпуте, 
// проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// //Проверить 6 символов или нет

const inputValidRef = document.querySelector('#validation-input'); 
console.dir(inputValidRef);

inputValidRef.addEventListener('focus', validation); // input получил фокус
inputValidRef.addEventListener('blur', validation); // blur потеря фокуса

inputValidRef.addEventListener('input', validation); // каждое изменение внутри input 

const validLength = Number(inputValidRef.dataset.length);


function validation(event) {
    // console.log('Импут получил фокус');
    console.log(event.currentTarget.value);

    if (inputValidRef.value.length === validLength) {
        inputValidRef.classList.add('valid');
        inputValidRef.classList.remove('invalid');
    }
     else if (inputValidRef.value.length === 0) {
        inputValidRef.classList.remove('invalid');
        inputValidRef.classList.remove('valid');
    } else {
        inputValidRef.classList.add('invalid');
        inputValidRef.classList.remove('valid');
    }
  }

 

