// You are given a positive integer array nums.

// The element sum is the sum of all the elements in nums.
// The digit sum is the sum of all the digits (not necessarily distinct) that appear in nums.
// Return the absolute difference between the element sum and digit sum of nums.

// Note that the absolute difference between two integers x and y is defined as |x - y|.

var differenceOfSum = function(nums) {
    //grab the element sum; change the array to a string with no commmas, split into an array but need to change elements to integers; then get the sum; return the difference of element - digit
    let element = nums.reduce((acc,c)=>acc+c,0);
    let noDoubleDigs = nums.join("").split("").map(el=>{
        return Number(el);
    });
    let digit = noDoubleDigs.reduce((acc,c)=>acc+c,0);
    return element-digit
};

//given an array of positive integers
//return the difference of the element sum (sum of the elements that we are given) and the digit sum (sum of the actual digits that make up our integers)
//console.log(differenceOfSum([1,15,6,3]), )9;
//console.log(differenceOfSum([1,2,3,4]), 0);