// IMPORT MODULES under test here:
import { add } from '../calculator.js';
import { sub } from '../calculator.js';
import { multiply } from '../calculator.js';
import { div } from '../calculator.js';

const test = QUnit.test;

// name your test by what it is testing
test('add function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const number1 = 5;
    const number2 = 8;

    const expected = 13;
    
    //Act
    const result = add(number1, number2); 
    // Call the function you're testing and set the result to a const
    // use your function here

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(result, expected);
});



test('sub function', (expect) =>{

    const number1 = 20;
    const number2 = 10;

    const expected = 10;

    const result = sub(number1, number2);

    

    expect.equal(result, expected);
});

test('multiply function', (expect) => {

    const number1 = 10;
    const number2 = 5;

    const expected = 50;

    const result = multiply(number1, number2);

    expect.equal(result, expected);
});

test('div function', (expect) => {

    const number1 = 10;
    const number2 = 5;

    const expected = 2;

    const result = div(number1, number2);

    expect.equal(result, expected);
});