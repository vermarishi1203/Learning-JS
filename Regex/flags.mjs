// Flags 

console.log(/the/g.exec("The cat is out of the bag because the kid turned the bag upside down on the table.")); // global flag

console.log(/the/i.exec("The cat is out of the bag because the kid turned the bag upside down on the table.")); // case-insensitive flag

console.log(/(T|t)he/m.exec("The cat is out of the bag. the kid turned the bag upside down on the table.")) //mutliline flag