var assert = require('assert'),
    core   = require('./index');

describe('Reduce', function() {
  describe('#sum()', function () {
    it('Given an array of numbers, turn that array of numbers into a total of all the numbers', function () {
      var input = [ 10, 15, 20, 25, 30, 35 ];
      var expected = 135
      var actual = core.sum(input)

      assert.equal(actual, expected);
    });
  });

  describe('#iAmRich()', function () {
    it('Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once', function () {
      var input = [
        { title: "Tesla Model S", price: 90000 },
        { title: "4 carat diamond ring", price: 45000 },
        { title: "Fancy hacky Sack", price: 5 },
        { title: "Gold fidgit spinner", price: 2000 },
        { title: "A second Tesla Model S", price: 90000 }
      ];
      var expected = 227005
      var actual = core.iAmRich(input)

      assert.equal(actual, expected);
    });
  });

  describe('#totalVotes()', function () {
    it('Given an array of objects with people who voted, return a count of how many people voted', function () {
      var input = [
        {name:'Bob' , age: 30, voted: true},
        {name:'Jake' , age: 32, voted: true},
        {name:'Kate' , age: 25, voted: false},
        {name:'Sam' , age: 20, voted: false},
        {name:'Phil' , age: 21, voted: true},
        {name:'Ed' , age:55, voted:true},
        {name:'Tami' , age: 54, voted:true},
        {name: 'Mary', age: 31, voted: false},
        {name: 'Becky', age: 43, voted: false},
        {name: 'Joey', age: 41, voted: true},
        {name: 'Jeff', age: 30, voted: true},
        {name: 'Zack', age: 19, voted: false}
      ];
      var expected = 7
      var actual = core.totalVotes(input)

      assert.equal(actual, expected);
    });
  });


  describe('#sumAll()', function () {
    it('Given an array of arrays that contain only numbers, return the sum of all items in the matrix', function () {
      var input = [[ 1, 2, 3 ],
                   [ 4, 5 ],
                   [ 6 ]];
      var expected = 21
      var actual = core.sumAll(input)

      assert.equal(actual, expected);
    });
  });

  describe('#luckyNumbers()', function () {
    it('Given an array of numbers, return a string that will have the following format: Your lucky numbers are: 30, 48, 11, 5, and 32', function () {
      var input  = [ 30, 48, 11, 5, 32 ];
      var expected = 'Your lucky numbers are: 30, 48, 11, 5, and 32';
      var actual = core.luckyNumbers(input)

      assert.equal(actual, expected);
    });
  });


});