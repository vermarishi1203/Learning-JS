
//I have worked with map() before but lets try this

// quadrupling the numbers in an array

const numArr = [1, 2, 3, 4, 5];

console.log(numArr.map(num => num*4));

// creating a new array using an existing array with some same and some new properties using

const productList = [
    {
        name: "Iphone",
        price: "60000",
        quantity: "5"
    },{
        name: "Macbook",
        price: "1150000",
        quantity: "2"
    },{
        name: "Mustang",
        price: "9800000",
        quantity: "1"
    },{
        name: "Basketball",
        price: "1000",
        quantity: "23"
    }


];

console.log(productList.map(product => ({name : product.name, totalValue : product.price* product.quantity }) ));

// converting an array of string to an array of numbers

const strArr = ["1", "2", "3", "4"];

console.log(strArr.map(Number)); // it is equivalent of strArr.map(num => Number(num));