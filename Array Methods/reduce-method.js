
// trying the reduce() method

//adding all the elements of an array

const numArr = [1, 2, 3, 4, 5];

console.log(numArr.reduce((accumulator, value) => accumulator + value, 0));

//getting the biggest number from the array

console.log(numArr.reduce((accumulator, value) => accumulator > value? accumulator : value, -Infinity));

// getting the total value of all the products

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

console.log(productList.reduce((totalValue, product) => totalValue + product.price* product.quantity,0));

