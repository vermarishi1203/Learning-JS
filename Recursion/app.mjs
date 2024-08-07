// Question: Write a function that counts the number of ways you can partition 'n' items using parts upto 'm' (assuming m >= 0)


"use strict";

import promptSync from "prompt-sync";

const prompt = promptSync({sigint: true});

const items = prompt(`Enter the number of items: `);

const parts = prompt(`Enter the number of parts: `);

console.log(`no of ways: ${findWays(items, parts)}`);

function findWays ( n, m ) {

    if ( m === 0 ) return 0;

    if ( n === 0 ) return 1;

    return findWays( n-m, m ) + findWays( n , m-1 );

};

