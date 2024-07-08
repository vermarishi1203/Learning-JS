

// trying the every() method 

// checking if every element in the array is positive

const numArr = [1, 2, 3, 4 , 5, 6];

const numArr2 = [1, 2, 3, 4 ,-1, 5, 6];

console.log(numArr.every(num => num >= 0));

console.log(numArr2.every(num => num >= 0));

// checking if every object of the array has the age property

const  peopleArr = [
    {
        name : "Rishi",
        age : 56
    }, {
        name : "Aniket",
        age : 15
    }, {
        name : "Dev"
    }, {
        name : "Shubham",
        age : 24
    }
];

console.log(peopleArr.every(person => person.age !== undefined));

// checking if every array in the arrayOfArrays is actually an array

const arrayOfArrays = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(arrayOfArrays.every(arr => Array.isArray(arr)));

