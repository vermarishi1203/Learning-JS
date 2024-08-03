// Question: Write a recursive function to find the factorial of a given number.

"use strict";

import promptSync from "prompt-sync";

const prompt = promptSync({sigint: true});

const inputNum = prompt(`Please input the number to find its factorial: `);

console.log(`The factorial of ${inputNum} is: ${getFactorial(inputNum)}`);

function getFactorial ( input ) {

    if (input < 0 || isNaN(input) || input === "" ) return getFactorial(prompt(`Please enter a number greater than 0: `));

    if (input <= 1) return 1;

    return input * getFactorial(input-1);

};

