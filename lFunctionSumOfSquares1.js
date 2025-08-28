// You are given a 1-indexed integer array nums of length n.

// An element nums[i] of nums is called special if i divides n, i.e. n % i == 0.

// Return the sum of the squares of all special elements of nums.

var sumOfSquares = function(nums) {
    // Create an array to hold all of the integers in nums that are considered special
    let sp = [];

    // loop through nums and use a conditional to see if the integer is special, if it is push to sp
    for (let i=0; i<nums.length; i++) {
        if (nums.length % (i+1) === 0) {
            sp.push(nums[i])
        }
    }

    // initialize a variable for our counter which will be used to sum sp
    let sum = 0;

    // loop through sp, square the integer and add to sum
    for (let j=0; j<sp.length; j++) {
        let squared = Math.pow(sp[j], 2)
        sum += squared
    }

    // Return sum
    return sum
};

// Given a 1-indexed array of integers (nums); given the definition of a special element is if the index can divide the amount of elements in nums
// Return the sum of the squares of all of the integers that are considered special
// console.log(sumOfSquares([1,2,3,4]), 21);
// console.log(sumOfSquares([2,7,1,19,18,3]), 63);