var assert = require("assert"),
  core = require("./index");

describe("Map", () => {
  describe("#multiplyBy10()", () => {
    test("Given an array of numbers, return a new array that all its elements are multiplied by 10\"", () => {
      var input = [45, 1, -10, 11, 250];
      var expected = [450, 10, -100, 110, 2500];
      var actual = core.multiplyBy10(input);

      assert.deepEqual(actual, expected);
    });
  });

  describe("#capitalizeNames()", () => {
    test("Given an array of strings, return a new array that has all the strings with capital letters", () => {
      var input = ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"];
      var expected = ["ANGELINA JOLIE", "ERIC JONES", "PARIS HILTON", "KAYNE WEST", "BOB ZIROLL"];
      var actual = core.capitalizeNames(input);

      assert.deepEqual(actual, expected);
    });
  });

  describe("#giveMeTheNames()", () => {
    test("Given an array of people objects, return an array of strings of the names", () => {
      var input = [{ name: "Angelina Jolie", age: 80 }, { name: "Eric Jones", age: 2 }, { name: "Paris Hilton", age: 5 }, { name: "Kayne West", age: 16 }, { name: "Bob Ziroll", age: 100 }];
      var expected = ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"];
      var actual = core.giveMeTheNames(input);

      assert.deepEqual(actual, expected);
    });
  });

  describe("#giveMeTheNamesAndTheAges()", () => {
    test("Given an array of people objects, return an array of strings of the names and the ages", () => {
      var input = [{ name: "Angelina Jolie", age: 80 }, { name: "Eric Jones", age: 2 }, { name: "Paris Hilton", age: 5 }, { name: "Kayne West", age: 16 }, { name: "Bob Ziroll", age: 100 }];
      var expected = ["Angelina Jolie is 80", "Eric Jones is 2", "Paris Hilton is 5", "Kayne West is 16", "Bob Ziroll is 100"];
      var actual = core.giveMeTheNamesAndTheAges(input);

      assert.deepEqual(actual, expected);
    });
  });


  describe("#shiftRight()", () => {
    test("Given an array, return a new array where the items are shifted to the right by one", () => {
      var input = [{ name: "" }, 10, "left-side"];
      var expected = ["left-side", { name: "" }, 10];
      var actual = core.shiftRight(input);

      assert.deepEqual(actual, expected);
    });
  });

  describe("#doubleMatrix()", () => {
    test("Given an array of arrays with numbers, return a new array of arrays with the numbers in the matrix being doubled, maintaining the same structure", () => {
      var input = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
      var expected = [[2, 4, 6], [8, 10, 12], [14, 16, 18]];
      var actual = core.doubleMatrix(input);

      assert.deepEqual(actual, expected);
    });
  });
});
