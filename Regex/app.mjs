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

// console.log(/\p{Script=Greek}/u.test("α"));

// console.log(/\p{Script=Arabic}/u.test("α"));

// // Repeating parts of a pattern

// console.log(/\d+/.test("1234"));

// console.log(/\d+/.test(""));

// console.log(/\d*/.test("1234"));

// console.log(/\d*/.test(""));

// console.log(/colou?r/.test("colour"));

// console.log(/colou?r/.test("color"));

// const validDate = /\d{1,2}-\d{1,2}-\d{4}/;

// console.log(validDate.test("12-03-2001"));

// console.log(validDate.test("4-5-1197"));

// // Grouping Subexpressions

// const minionHello = /hello+(bello+)+/i;

// console.log(minionHello.test("helloBellobelloooobelloooBello"));

// // Exec and match methods of regex and strings respectively

// console.log(/yes/.exec("oh yes"));

// console.log("oh no".match(/no/));

// // Matchs and Groups and corresponding values in the output array

// console.log(/#(\w{6})/.exec("the hex color code of this shade is #fff123")); // when group is matched

// console.log(/colo(u)?r/.exec("the hex color code of this shade is #fff123")); // when group is not matched 

// console.log(/(\d)+/.exec("the hex color code of this shade is #fff123")); // when group is matched multiple times

// console.log(/colo(?:u)?r/.exec("the hex color code of this shade is #fff123")); // when you don't want group matches to show up in the array of matches, use ?: after opening ()

// // The Date class

// console.log( new Date()); // current date and time (GMT)

// console.log( new Date(2020, 11, 26)) // specified date for Dec 25, 2020

// console.log( new Date(2020, 11, 25, 23, 59)) // specified date and Time for Dec 25, 2020

// console.log( new Date("2020-12-25T23:59")); // standardised format of line 146

// console.log( new Date(2020, 11, 26).getTime()); // to get the no. of miliseconds from 1970 to specified date

// console.log( new Date(1608921000000)); // getting date using no. of miliseconds from 1970 to that date

// // some of the methods of the date objects

// console.log( new Date().getFullYear());

// console.log( new Date().getMonth());

// console.log( new Date().getDate());

// console.log( new Date().getDay());

// console.log( new Date().getHours());

// console.log( new Date().getMinutes());

// console.log( new Date().getSeconds());

// console.log( new Date().getMilliseconds());

// extracting date from a string

function getDate( anyStr) {

    
}
