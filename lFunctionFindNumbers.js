// Given an array nums of integers, return how many of them contain an even number of digits.

var findNumbers = function(nums) {
    //change nums to strings, check length against modulus 2; filter these out and return the length
    return nums.filter(el=>el.toString().length%2==0).length
};

//given an array of integers
//return the amount of integers that contain an even amount of integers
//console.log(findNumbers([12,345,2,6,7896]), 2);
//console.log(findNumbers([555,901,482,1771]), 1)