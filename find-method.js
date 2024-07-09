
// trying the find() method

// finding the person whose age is "24"

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

console.log(peopleArr.find(person => person.age === 24).name);

