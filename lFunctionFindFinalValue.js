// You are given an array of integers nums. You are also given an integer original which is the first number that needs to be searched for in nums.

// You then do the following steps:

// If original is found in nums, multiply it by two (i.e., set original = 2 * original).
// Otherwise, stop the process.
// Repeat this process with the new number as long as you keep finding the number.
// Return the final value of original.

var findFinalValue = function(nums, original) {
    //use recursion...if the original does not exist, return it, else return the function with new parameters being the original array and original*2
    if(nums.indexOf(original)===-1){
        return original
    }
    return findFinalValue(nums, original*2)
};

//given an array of integers and a starting value (integer)
//return the value that is not present in the array if you were to continuously multiply the starting value by 2, and the product be the new starting value (if it exists in the array)
//console.log(findFinalValue([5,3,6,1,12], 3), 24);
//console.log(findFinalValue([2,7,9], 4), 4)