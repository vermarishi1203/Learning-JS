
// trying the some() method

// checking if there is some number greater than 5 in the array

const numArr = [1, 2, 3, 4, 5, 6];

console.log(numArr.some(num => num > 5 ));

// checking if some person(s) is a senior citizen in the array

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

console.log(peopleArr.some( person => person.age > 50 ));

// checking if there is a(or more) kid in the array

console.log(peopleArr.some( person => person.age < 10 ));
