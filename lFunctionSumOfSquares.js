// You are given a 1-indexed integer array nums of length n.

// An element nums[i] of nums is called special if i divides n, i.e. n % i == 0.

// Return the sum of the squares of all special elements of nums.

var sumOfSquares = function(nums) {
    // create an empty array (specials)
    let specials = [];

    // loop through nums, use a conditional and see if the integer is special, if so, push to specials
    for (let i=0; i<nums.length; i++) {
        if(nums.length % nums[i] === 0 ) {
            specials.push(nums[i]);
        }
    };

    // map specials (squaredSpecials) and return the square of each element
    let squaredSpecials = specials.map(el => {
        return el*el;
    });

    // create a variable (total) and set to 0
    let total = 0;

    // loop through squaredSpecials and add to total
    for (let j=0; j<squaredSpecials.length; j++) {
        total += squaredSpecials[j]
    };

    // return total
    return total
};

//given an array of single digit integers; given the definition of "special" being that the length of the array can be divided by an integer in the array with no remainder
//return the sum of the squares of all of the "special" elements in the given array
//console.log(sumOfSquares([1,2,3,4]), 21);
//console.log(sumOfSquares([2,7,1,19,18,3]), 14);