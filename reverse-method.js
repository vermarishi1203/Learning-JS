
// trying the reverse() method 

// reversing the elements of an array

const numArr = [1, 2, 3, 4, 5];

console.log(numArr.reverse(), numArr);

// reversing the elements without modifying the original array

const numArr2 = [1, 2, 3, 4, 5, 6];

console.log([...numArr2].reverse(), numArr2);

// reversing a string using reverse() and join() methods

const aString = "My name is Thomas Shelby"

console.log(aString.split("").reverse().join(""));
