let numbers = [ 1,2,3,4,5,6,7,8 ];

let validate = (number) => { return number > 5 };

let filteredNumbers = numbers.filter(validate);

console.log(filteredNumbers);