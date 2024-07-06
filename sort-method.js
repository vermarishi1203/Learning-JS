
// trying the sort method 

// sorting an array of strings

const namesArr = ["Rishi", "Dev", "Aniket", "Shubham"];

console.log(namesArr.sort()); // no need to provide a comparefn because in absence of a comparefn, it converts array elements to strings and compare them with UTF-16 unicode code units sequence

// sorting an array of numbers in ascending order 

const numArr = [23, 40, 2 , 400 , 9 , 89, 250];

console.log(numArr.sort((a, b)=> a-b)); // needs a comparefn because otherwise it will sort the array according to the sequence of UTF-16 unicode code units (which is not the same as traditional number sorting)

// how comparefn works? it takes 2 args, current and next element of the array, if the return value of the function is negative, then it sorts current element before next element, otherwise it sorts current element after next element, if the return value is zero, it doesn't change anything

// if a-b is <0, then a, b :: if a-b is >0, then b, a :: if a-b ===0, then a, b (for ascending order)

// in case of descending order , just do "b-a" instead 

//sorting the array according to price of the products

const productList = [
    {
        name: "Iphone",
        price: "60000",
        quantity: "17"
    },{
        name: "Macbook",
        price: "1150000",
        quantity: "4"
    },{
        name: "Mustang",
        price: "9800000",
        quantity: "2"
    },{
        name: "Basketball",
        price: "1000",
        quantity: "12"
    }

];

console.log(productList.sort((a, b) => a.price - b.price)); // keep in mind that sort() manipulates the original array returns the ref to the original array, so this line will display the same result as the line 49 because that is when the array was modified last

// sorting the same array according the abundance of products

console.log(productList.sort((a, b) => b.quantity - a.quantity)); 
