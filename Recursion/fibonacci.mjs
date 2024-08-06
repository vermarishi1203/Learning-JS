// Question: write a program to calculate the nth number of the fibonacci series using recursion.

"use strict";

import promptSync from "prompt-sync";

const prompt = promptSync({sigint: true});

const inputIndex = prompt("Enter the index of the number that you want to find in the fibonacci series: ");

console.log(`The number at the ${inputIndex}th index in the fibonacci series is: ${calculateFibonacciNum(inputIndex)}`);

function calculateFibonacciNum (inputIndex) {

    if( inputIndex === "" || inputIndex < 0 || isNaN(inputIndex))  return calculateFibonacciNum(prompt("Please enter a valid input: "));

    if( inputIndex == 0 || inputIndex == 1 ) return inputIndex;

    return calculateFibonacciNum(inputIndex-1) + calculateFibonacciNum(inputIndex-2);

};

