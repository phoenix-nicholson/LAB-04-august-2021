
import { add } from './calculator.js';
import { sub } from './calculator.js';
import { multiply } from './calculator.js';
import { div } from './calculator.js';

const addNumber1 = document.getElementById('add-number-1');
const addNumber2 = document.getElementById('add-number-2');
const addButton = document.getElementById('add-button');
const addAnswer = document.getElementById('add-answer');


addButton.addEventListener('click', () => {

    const num1 = Number(addNumber1.value);
    const num2 = Number(addNumber2.value);


    const value = add(num1, num2);

    addAnswer.textContent = value;

});



const subNumber1 = document.getElementById('sub-number-1');
const subNumber2 = document.getElementById('sub-number-2');
const subButton = document.getElementById('sub-button');
const subAnswer = document.getElementById('sub-answer');


subButton.addEventListener('click', () => {

    const num1 = Number(subNumber1.value);
    const num2 = Number(subNumber2.value);

    const value = sub(num1, num2);

    subAnswer.textContent = value;
});


const multiplyNumber1 = document.getElementById('multiply-number-1');
const multiplyNumber2 = document.getElementById('multiply-number-2');
const multiplyButton = document.getElementById('multiply-button');
const multiplyAnswer = document.getElementById('multiply-answer');


multiplyButton.addEventListener('click', () => {

    const num1 = Number(multiplyNumber1.value);
    const num2 = Number(multiplyNumber2.value);

    const value = multiply(num1, num2);

    multiplyAnswer.textContent = value;
});


const divNumber1 = document.getElementById('div-number-1');
const divNumber2 = document.getElementById('div-number-2');
const divButton = document.getElementById('div-button');
const divAnswer = document.getElementById('div-answer');

divButton.addEventListener('click', () => {

    const num1 = Number(divNumber1.value);
    const num2 = Number(divNumber2.value);

    const value = div(num1, num2);

    divAnswer.textContent = value;
});


   