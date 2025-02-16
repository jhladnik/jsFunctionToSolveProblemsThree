// You are given an integer array nums. In one operation, you can add or subtract 1 from any element of nums.

// Return the minimum number of operations to make all elements of nums divisible by 3.

var minimumOperations = function(nums) {
    // create a variable that will hold our sum; loop through nums; if nums[i] !== a multiple of 3, add 1 to sum; return sum when loop is completed
    let sum = 0;

    for (let i=0; i<nums.length; i++) {
        if (nums[i] % 3 !== 0) {
            sum += 1
        }
    }
    return sum
};

// given an array of integers (nums)
// return the minimum sum that it takes for each element to reach a multiple of 3
// console.log(minimumOperations([1,2,3,4]), 3);
// console.log(minimumOperations([3,6,9]), 0);