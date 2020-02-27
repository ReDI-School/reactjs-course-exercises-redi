var assert = require('assert'),
    core   = require('./index');

describe('Filter', () => {
  describe('#onlyEven()', () => {
    test('Given an array of numbers, return a new array that has only the numbers that are even.', () => {
      var input = [ 10, 15, 20, 25, 30, 35 ];
      var expected = [ 10, 20, 30 ]
      var actual = core.onlyEven(input)

      assert.deepEqual(actual, expected);
    });
  });

  describe('#peopleWhoBelongToTheIlluminati()', () => {
    test('Given an array of people objects, return a new array that has filtered out all those who don\'t belong to the club.', () => {
      var input = [
          { name: "Angelina Jolie", member: true },
          { name: "Eric Jones", member: false },
          { name: "Paris Hilton", member: true },
          { name: "Kayne West", member: false },
          { name: "Bob Ziroll", member: true }
      ];
      var expected = [
        { name: 'Angelina Jolie', member: true },
        { name: 'Paris Hilton', member: true },
        { name: 'Bob Ziroll', member: true }
      ];

      var actual = core.peopleWhoBelongToTheIlluminati(input)

      assert.deepEqual(actual, expected);
    });
  });

  describe('#oldEnough()', () => {
    test('Given an array of people objects, return a new array with all the people who are old enough to see The Matrix, older than 18', () => {
      var input = [
        { name: "Angelina Jolie", age: 80 },
        { name: "Eric Jones", age: 2 },
        { name: "Paris Hilton", age: 5 },
        { name: "Kayne West", age: 16 },
        { name: "Bob Ziroll", age: 100 }
      ];
      var expected = [
        { name: 'Angelina Jolie', age: 80 },
        { name: 'Bob Ziroll', age: 100 }
      ];

      var actual = core.oldEnough(input)

      assert.deepEqual(actual, expected);
    });
  });

  describe('#onlyOneWord()', () => {
    test('Given an array of strings, return a new array that only includes those that are only one word.', () => {
      var input = [ 'return', 'phrases', 'with one word' ];
      var expected = [ 'return', 'phrases' ]
      var actual = core.onlyOneWord(input)

      assert.deepEqual(actual, expected);
    });
  });

  describe('#positiveRowsOnly()', () => {
    test(
      'Given an array of arrays, return only those arrays that contain only positive numbers',
      () => {
        var input = [[ 1, 10, -100 ],
                     [ 2, -20, 200 ],
                     [ 3, 30,  300 ]];
        var expected = [[ 3, 30, 300 ]];
        var actual = core.positiveRowsOnly(input)

        assert.deepEqual(actual, expected);
      }
    );
  });
});