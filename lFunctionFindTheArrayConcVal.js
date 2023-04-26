// ou are given a 0-indexed integer array nums.

// The concatenation of two numbers is the number formed by concatenating their numerals.

// For example, the concatenation of 15, 49 is 1549.
// The concatenation value of nums is initially equal to 0. Perform this operation until nums becomes empty:

// If there exists more than one number in nums, pick the first element and last element in nums respectively and add the value of their concatenation to the concatenation value of nums, then delete the first and last element from nums.
// If one element exists, add its value to the concatenation value of nums, then delete it.
// Return the concatenation value of the nums.

var findTheArrayConcVal = function(nums) {
    //create a concatenation value to add to; use a while loop while nums.length has something; use a conditional to see if nums.length is greater than one (odd number of elements possibility), if greater than one concat first el and last el and add the integer version to concatenation value, else add the value in nums to concatenation value; return the concatenation value
    let concatenation = 0;
  
    while (nums.length > 0) {
        if (nums.length > 1) {
            concatenation += parseInt(nums[0].toString() + nums[nums.length - 1].toString());
            nums.shift();
            nums.pop();
        } else {
            concatenation += parseInt(nums[0]);
            nums.shift();
        };
    };
  
    return concatenation;
};

//given an array of integers
//return the value if the first and last elements of the array were concatenated, that became the value, then those two elements are removed from the array giving us a new array to do the same operation with until the original array is empty
//console.log(findTheArrayConcVal([7,52,2,4]), 596);
//console.log(findTheArrayConcVal([5,14,13,8,12]), 673);