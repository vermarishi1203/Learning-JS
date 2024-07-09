
// trying the splice() method

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// removing n elements starting from index m from the array

console.log(numArr.splice(2, 4)); // returns the array of removed elements ; n=4 and m = 2 here

console.log(numArr); // returns the array after the elements were removed by splice() method

// removing n elements starting from index m and adding elements to the array

console.log(numArr.splice(2, 2, 3, 4, 5, 6)); // keep in mind that index was shifted when numArr was modified earlier by line 8 ; all parameters after the first two parameters are taken as elements to be added in the array

console.log(numArr); // the elements added by line 14 will be added starting from the starting index of the removed elements (which is 2 in this case)

// adding elements without removing any element (don't use this approach to add elements as there are better approaches out there)

console.log(numArr.splice(6, 0 , 7, 8)); // keep the first parameter at the starting index of where you want the elements to be inserted

console.log(numArr); // nothing is removed but elements are added at index 6 as specified by line 20
