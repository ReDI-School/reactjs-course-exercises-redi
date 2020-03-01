//  Given an array of numbers,
const numArray = [1, 2, 3, 4, 5, 34, 45, 23, 12, 654];
//  return a new array that has only the numbers that are even.
function onlyEven(numArray) {
  // your code here
}

// Given an array of people objects,
const illuminatiArray = [
  { name: "Ron", isIlluminati: true },
  { name: "Leslie", isIlluminati: false },
  { name: "Ben", isIlluminati: false },
  { name: "April", isIlluminati: true },
  { name: "Andy", isIlluminati: false }
];
// return a new array that has filtered out all those who don't belong to the club.
function peopleWhoBelongToTheIlluminati(illuminatiArray) {
  // your code here
}

// Given an array of people objects,
const ageArray = [
  { name: "Ron", age: 12 },
  { name: "Leslie", age: 32 },
  { name: "Ben", age: 6 },
  { name: "April", age: 99 },
  { name: "Andy", age: 46 }
];
// return a new array with all the people who are old enough to see The Matrix,
// older than 18
function oldEnough(ageArray) {
  // your code here
}

// Given an array of strings,
const stringArray = ["apple", "peach", "jelly beans", "pineapple", "tuna fish"];
// return a new array that only includes those that are only one word.
// no spaces
function onlyOneWord(stringArray) {
  // your code here
}

// Given an array of arrays,
const arrayception = [[2], [1, 4, 5], [4, 8, 12], [3, 2, 6]];
// return only those arrays that contain only positive numbers
function positiveRowsOnly(arrayception) {
  // your code here
}

module.exports = {
  onlyEven: onlyEven,
  peopleWhoBelongToTheIlluminati: peopleWhoBelongToTheIlluminati,
  oldEnough: oldEnough,
  onlyOneWord: onlyOneWord,
  positiveRowsOnly: positiveRowsOnly
};
