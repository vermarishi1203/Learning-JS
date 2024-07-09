
// trying the concat() method

//joining two arrays

const numArr1 = [1, 2, 3];

const numArr2 = [4, 5, 6];

console.log(numArr1.concat(numArr2));

// joining more arrays

const numArr3 = [7, 8, 9];

const numArr4 = ["Rishi", "Dev", "Shubham"];

console.log(numArr1.concat(numArr2, numArr3, numArr4));

// joining elements 

console.log(numArr1.concat(numArr2, "Rishi", 50));