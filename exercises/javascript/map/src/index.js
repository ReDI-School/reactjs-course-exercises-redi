let numbers = [ 1,2,3,4,5,6,7,8 ];

let add = (number) => { return number + 1 };

let copy = numbers.map(add);

console.log(copy);