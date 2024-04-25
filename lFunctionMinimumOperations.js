// You are given a non-negative integer array nums. In one operation, you must:

// Choose a positive integer x such that x is less than or equal to the smallest non-zero element in nums.
// Subtract x from every positive element in nums.
// Return the minimum number of operations to make every element in nums equal to 0.

var minimumOperations = function(nums) {
    // create a variable to hold the quantity of steps
    let steps = 0;

    // sum nums
    let sum = 0;

    for (let j=0; j<nums.length; j++) {
        sum += nums[j]
    }

    // use a while loop to go through the operations
    while (sum>0) {
        // increment steps
        steps++;
        // filter out any positive integers
        let positives = nums.filter(el => el>0);

        // if the new positives array has no length, update the sum
        if (positives.length === 0) break;

        // else find the smallest, positive integer in the new array
        let smallest = Math.min(...positives);
        // loop through nums and if the element is greater than 0, subtract smallest from it to create a new element
        for (let i=0; i<nums.length; i++) {
            if (nums[i] > 0) nums[i] -= smallest
        }
        sum -= smallest * positives.length
    }
    // return the resulting step amount
    return steps

};

// given an array of non-negative integers (nums)
// return the number of steps it takes to make all the integers in the array = 0 when in one step you are to take the smallest, non-zero element and subtract it from any positive integer
// console.log(minimumOperations([1,5,0,3,5]); 3);
// console.log(minimumOperations([0]); 0);