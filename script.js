const passwordElement = document.getElementById('password');
const generateBtn = document.getElementById('generate-btn'); 
const uppercaseCheckbox = document.getElementById('uppercase');
const lowercaseCheckbox = document.getElementById('lowercase'); 
const numbersCheckbox = document.getElementById('numbers'); 
const symbolsCheckbox = document.getElementById('symbols'); 
const lengthElement = document.getElementById('length');


const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+{}[]|:;<>?,./'; 


function getRandomCharacter(str) {
    return str[Math.floor(Math.random() * str.length)];
   
}


function generatePassword() {
    const length = parseInt(lengthElement.value);
    let characters = '';
    let password = '';
   
    if (uppercaseCheckbox.checked) characters += uppercaseLetters;
    if (lowercaseCheckbox.checked) characters += lowercaseLetters;
    if (numbersCheckbox.checked) characters += numbers;
    if (symbolsCheckbox.checked) characters += symbols;


    if (characters.length === 0) {
        return 'Selecione pelo menos uma opção';
    }

    for (let i = 0; i < length; i++) {
        password += getRandomCharacter(characters);
    }

    return password;
}


generateBtn.addEventListener('click', () => {
    const password = generatePassword();
    passwordElement.value = password;
});