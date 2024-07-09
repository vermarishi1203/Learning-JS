
// trying the fill() method

// fill the array with zeroes

const numArr = [1, 2, 3, 4, 5];

const newNumArr = numArr.fill(0);

console.log(numArr); //it modifies the array

console.log(newNumArr); // it returns a copy of the modified array as well

// specifying which elements to fill

const numArr2 = [1, 2, 3, 4, 5, 6];

console.log(numArr2.fill(0, 2, 5)); // here 2 is starting index (included for filling) and 5 is ending index(excluded)

// creating an array of upto n numbers

const customNumArr = (n) => Array(n).fill(0).map((_, index) => index +1 );

console.log(customNumArr(7));
