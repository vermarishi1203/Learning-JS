
// same as map(), I used this one before as well , but practice doesn't hurt 

// filtering out odd numbers

const numArr = [1, 2, 3, 4, 5, 6];

console.log(numArr.filter(num => num % 2 === 0));

// filtering out minors

const  peopleArr = [
    {
        name : "Rishi",
        age : 56
    }, {
        name : "Aniket",
        age : 15
    }, {
        name : "Dev",
        age : 18
    }, {
        name : "Shubham",
        age : 24
    }
];

console.log(peopleArr.filter(person => person.age >= 18));

//removing duplicate numbers, NOTE TO SELF: take it as a fun exercise but don't use this approach, there are better ways to do it

const numArr2 = [1, 2, 3, 4, 5, 6, 2, 3, 6];

console.log(numArr2.filter((num, index, arr) => arr.indexOf(num) === index)); //index of every element of the array will be checked against the first appearance of that element in the array