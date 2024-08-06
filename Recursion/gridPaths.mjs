//Question: Write a function that takes two inputs n and m and outputs the number of unique paths from the top left corner to the bottom right corner of a n*m grid. 

//Constrains: you can only move down or right 1 unit at a time.

"use srict";

import promptSync from "prompt-sync";

const prompt = promptSync({sigint: true});

const rows = prompt("Input the number of rows of the grid: ");

const columns = prompt("Input the number of colums of the grid: ");

console.log(`The dimensions of the grid are ${rows}x${columns}.`);

let uniquePaths = calculateUniquePaths( rows, columns );

console.log(`The number of unique paths in this grid are: ${uniquePaths}`);

function calculateUniquePaths ( n , m ) {

    if( n == 0 || m == 0 || n === "" || m === "" || isNaN(n) || isNaN(m)) {

        console.log("Please enter a valid value for rows and columns!");

        const n = prompt("Input the number of rows of the grid: ");

        const m = prompt("Input the number of colums of the grid: ");

        console.log(`The dimensions of the grid are ${n}x${m}.`);

        return calculateUniquePaths( n, m );

    };

    if ( n == 1 || m == 1 ) return 1; // if i use === operator, it doesnt work for the base case inputs

    return calculateUniquePaths( n, m-1 ) + calculateUniquePaths( n-1, m );

};


