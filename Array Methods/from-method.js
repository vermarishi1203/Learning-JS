
// trying the from() method

// converting a string of numbers to an array of numbers

const stringOfNumbers = "123456789" ;

console.log(Array.from(stringOfNumbers, item => Number(item))); // you can also simply pass the Number constructor in place of the map function parameter 

// like this : console.log(Array.from(stringOfNumbers, Number));

// removing duplicates using the from() method and Set constructor

const numArr = [1, 2, 2, 3, 4, 5, 5, 5, 3, 1 ,6];

console.log( Array.from( new Set(numArr)));

const peopleArr = ["Rishi", "Aniket", "Dev", "Shubham", "Aniket", "Dev", "Dev",];

console.log( Array.from( new Set( peopleArr )));