// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

var runningSum = function(nums) {
    //create an empty array to hold the sums; loop through the given arrayl; slice a new array from 0 element to i+1 element; reduce each new array and push sum to the first empty array; return the new array
    let sums = []
    for(let i=0; i<nums.length; i++){
        let cutUp = nums.slice(0, (i+1));
        let sumOfEl = cutUp.reduce((acc,c)=>acc+c,0);
        sums.push(sumOfEl);
    };
    return sums
};

//given an array of integers; the definition of running sum is runningSum[i] = sum(nums[0]...nums[i])
//return an array of the running sum of each of the elements in the original array
//console.log(runningSum([1,2,3,4]), [1,3,6,10]);
//console.log(runningSum([1,1,1,1,1]), [1,2,3,4,5]);
//console.log(runningSum([3,1,2,10,1]), [3,4,6,16,17]);