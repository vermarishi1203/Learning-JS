// lets see 

// Ways to create regex

// using RegExp constructor

const regex1 = new RegExp("abc");

console.log(regex1);

// directly writing a literal value

const regex2 = /abc/;

console.log(regex2);

// testing using a regex

console.log(regex1.test("abcdefg"));

console.log(regex1.test("abdfc"));

console.log(regex1.test("deabcf"));



