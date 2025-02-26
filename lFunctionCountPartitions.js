// You are given an integer array nums of length n.

// A partition is defined as an index i where 0 <= i < n - 1, splitting the array into two non-empty subarrays such that:

// Left subarray contains indices [0, i].
// Right subarray contains indices [i + 1, n - 1].
// Return the number of partitions where the difference between the sum of the left and right subarrays is even.

var countPartitions = function(nums) {
    // create a counter (cntr); loop from 0 to nums.length-1; in each interation, create a slice (left) of 0 to i and a slice (right) i+1 to nums.length-1; sum both of the new arrays and subtract right from left; use a conditional to see if the absolute value of the difference is even, if so add to cntr; return cntr
    let cntr = 0;

    for (let i=0; i<nums.length-1; i++) {
        let left = nums.slice(0,i+1).reduce((acc,c) => acc+c, 0);
        let right = nums.slice(i+1).reduce((acc,c) => acc+c, 0);

        if((left-right) % 2 === 0) {
            cntr++
        }
    }

    return cntr
    
};

// given an array of integers (nums); given the definition of a partition is splitting an array into two non-empty subarrays so that the left subarray (left) contains [0, i] and the right subarray (right) contains [i+1, nums.length-1]
// return the number of partitions that have an even differnce between left and right
// console.log(countPartitions([10,10,3,7,6]), 4);
// console.log(countPartitions([1,2,2]), 0);
// console.log(countPartitions([2,4,6,8]), 3);