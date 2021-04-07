//Задание 6
//Проверить 6 символов или нет

const inputValidRef = document.querySelector('#validation-input');
console.dir(inputValidRef);

inputValidRef.addEventListener('blur', validation); // blur потеря фокуса

const validLength = Number(inputValidRef.dataset.length);

function validation() {
    if (inputValidRef.value.length === validLength) {
        inputValidRef.classList.add('valid');
        inputValidRef.classList.remove('invalid');
    } else if (inputValidRef.value.length === 0) {
        inputValidRef.classList.remove('invalid');
        inputValidRef.classList.remove('valid');
    } else {
        inputValidRef.classList.add('invalid');
        inputValidRef.classList.remove('valid');
    }
  }

  