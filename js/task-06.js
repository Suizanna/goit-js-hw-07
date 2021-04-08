//Задание 6
//Проверить 6 символов или нет

// const inputValidRef = document.querySelector('#validation-input');
// console.dir(inputValidRef);

// inputValidRef.addEventListener('blur', validation); // blur потеря фокуса

// const validLength = Number(inputValidRef.dataset.length);

// function validation() {
//     if (inputValidRef.value.length === validLength) {
//         inputValidRef.classList.add('valid');
//         inputValidRef.classList.remove('invalid');
    
//     //  else if (inputValidRef.value.length === 0) {
//     //     inputValidRef.classList.remove('invalid');
//     //     inputValidRef.classList.remove('valid');
//     } else {
//         inputValidRef.classList.add('invalid');
//         inputValidRef.classList.remove('valid');
//     }
//   }

const input = document.getElementById("validation-input");
console.log(input)

input.addEventListener('blur', e => {
    console.log(e)
    if (input.getAttribute('data-length') > (input.value.length)) {
        input.classList.remove('valid');
        input.classList.add('invalid');
    } else {
        input.classList.remove('invalid');
        input.classList.add('valid');
    }
})