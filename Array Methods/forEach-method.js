
//trying the forEach() method

const arr1 = [1, 2, 3, 4, 5, 6];

let sum = 0 ;

arr1.forEach(item=> sum += item);

console.log(sum);

const lettersArr = ["a", "b", "c", "d", "b", "b", "c", "a", "b","a"];

let letterCount = {};

lettersArr.forEach(count => letterCount[count]? letterCount[count]++ : letterCount[count] = 1);

console.log(letterCount);
