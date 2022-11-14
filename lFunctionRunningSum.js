// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

var runningSum = function(nums) {
    //create a function to find the sum of every element plus the next element, extracting the first
    //then run that function over the given array to find the totals
    const totes = (acc => c => acc += c)(0);
    return nums.map(totes)
};

//given an array of integers
//return an array of integers that is the running total of the integers in the given array
//input([1,2,3,4]), output([1,3,6,10]);
//input([1,1,1,1,1]), output([1,2,3,4,5]);
//input([3,1,2,10,1]), output([3,4,6,16,17])