// // lets see 

// // Ways to create regex

// // using RegExp constructor

// const regex1 = new RegExp("abc");

// console.log(regex1);

// // directly writing a literal value

// const regex2 = /abc/;

// console.log(regex2);

// // testing using a regex

// console.log(regex1.test("abcdefg"));

// console.log(regex1.test("abdfc"));

// console.log(regex1.test("deabcf"));

// // matching against digits

// console.log(/[0123456789]/.test("hey this is 2024")); // all characters in [] are individually tested against the string

// console.log(/[0-9]/.test("this is 2024")); // a hyphen between two characters, in square brackets, provides a range of characters according to the unicode sequence

// console.log(/\d/.test("this is 2024")); // there are built-in shortcuts for special character groups like \d is for digits

// // more built-in shortcuts

// // \d	Any digit character
// // \w	An alphanumeric character (“word character”)
// // \s	Any whitespace character (space, tab, newline, and similar)
// // \D	A character that is not a digit
// // \W	A nonalphanumeric character
// // \S	A nonwhitespace character
// // .	Any character except for newline


// console.log(/\w/.test("are there words or numb3rs here?"));

// console.log(/\w/.test("-/?"));

// console.log(/\s/.test("any space here or    tab \n or new line? yes"));

// console.log(/\s/.test("no_space_or_tab_or_newline_etc_here"));

// console.log(/\D/.test("i am not a digit!"));

// console.log(/\D/.test("131324"));

// // \W and \S are just opposites of \w and \s resp. like \D is opp of \d

// console.log(/./.test("characters    32423 etx/ //"));

// console.log(/./.test("\n"));

// // special meanings of symbols like + and . are lost inside []

// console.log(/[.]/.test("\n"));

// console.log(/[.]/.test("."));

// console.log(/a+b/.test("ab"));

// console.log(/a[+]b/.test("ab"));

// console.log(/a[+]b/.test("a+b"));

// // to invert a set of characters , use ^ called caret

// console.log(/[^01]/.test("411000660416"));

// console.log(/[^01]/.test("01010111111001"));

// // International Characters

// // \p{L}	Any letter
// // \p{N}	Any numeric character
// // \p{P}	Any punctuation character
// // \P{L}	Any nonletter (uppercase P inverts)
// // \p{Script=Hangul}	Any character from the given script

// console.log(/\w/u.test("é"));

// console.log(/\p{L}/u.test("é"));

// console.log(/\p{L}/u.test("!123"));

console.log(/\p{Script=Greek}/u.test("α"));

console.log(/\p{Script=Hindi}/u.test("α"));

