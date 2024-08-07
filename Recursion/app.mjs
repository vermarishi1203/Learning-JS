// Question: Write a function that counts the number of ways you can partition 'n' items using parts upto 'm' (assuming m >= 0)


"use strict";

import promptSync from "prompt-sync";

const prompt = promptSync({sigint: true});

checkInput();

function checkInput () {

    const n = prompt(`Enter the number of items: `);

    const m = prompt(`Enter the number of parts: `);

    if ( m < 0 || m === "" || n === "" || isNaN(m) || isNaN(n)) {
     
        console.log("Invalid Input! \nPlease make sure that the values are non-negative integers");

        return checkInput();
        
    };

    console.log(`no of ways: ${findWays(n, m)}`);

};

function findWays ( n, m ) {

    if ( m == 0 ) return 0;

    if ( n == 0 || n < 0) return 1;

    return findWays( n-m , m ) + findWays( n , m-1 );

};

