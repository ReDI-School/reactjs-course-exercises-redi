let numbers = [ 1,2,3,4,5,6,7,8 ];

let addAllNumbers = (number, accumulated) => { return accumulated + number };

let sum = numbers.reduce(addAllNumbers, 0);

console.log(sum);