// Given an array of numbers,
// return a new array that all its elements are multiplied by 10"
function multiplyBy10 (array) {
  // your code here
}

// Given an array of strings,
// return a new array that has all the strings with capital letters
function capitalizeNames (array) {
 // your code here
}

// Given an array of people objects,
// return an array of strings of the names
function giveMeTheNames (array) {
  return array.map(({name})=>name)
}

// Given an array of people objects,
// return an array of strings of the names and the ages
function giveMeTheNamesAndTheAges (array) {
 // your code here
}

// Given an array,
// return a new array where the items are shifted to the right by one
function shiftRight (array) {
 // your code here
}

// Given an array of arrays with numbers,
// return a new array of arrays with the numbers in the matrix being doubled,
// maintaining the same structure
function doubleMatrix (array) {
 // your code here
}

module.exports = {
  multiplyBy10: multiplyBy10,
  shiftRight: shiftRight,
  capitalizeNames: capitalizeNames,
  giveMeTheNames: giveMeTheNames,
  giveMeTheNamesAndTheAges: giveMeTheNamesAndTheAges,
  doubleMatrix: doubleMatrix
};