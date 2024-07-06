
// trying the slice() method 

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// getting the elements of an array from index n to index m

console.log( numArr.slice(2,5)); // starting index element is included but ending index element is not 

// getting the elements from index n element to the last element 

console.log( numArr.slice(6)); //ending index parameter is not passed so it takes array.length as the value(not the last element index as that is not included)

// getting the first n elements

console.log( numArr.slice(0, 4));

//getting the last n elements

console.log( numArr.slice(-3));
