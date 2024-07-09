
// trying the findIndex() method

// finding the index of the object whose age property === 24

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

console.log(peopleArr.findIndex(person => person.age === 24));

