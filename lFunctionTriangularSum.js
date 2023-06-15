// You are given a 0-indexed integer array nums, where nums[i] is a digit between 0 and 9 (inclusive).

// The triangular sum of nums is the value of the only element present in nums after the following process terminates:

// Let nums comprise of n elements. If n == 1, end the process. Otherwise, create a new 0-indexed integer array newNums of length n - 1.
// For each index i, where 0 <= i < n - 1, assign the value of newNums[i] as (nums[i] + nums[i+1]) % 10, where % denotes modulo operator.
// Replace the array nums with newNums.
// Repeat the entire process starting from step 1.
// Return the triangular sum of nums.

var triangularSum = function(nums) {
    //create an empty array (newNums); use a conditional to see if the given array's length is less than 2, if so, return nums[0] , else loop through nums to nums.length-1 and push the result of (nums[i]+nums[i+1]) % 10 to newNums; use a conditional to see if newNums.length < 2, if so return newNums[0], else use recursion with newNums as the new input of triangularSum
    let newNums = [];

    if(nums.length<2){
        return nums[0];
    }else{
        for(let i=0; i<nums.length-1; i++){
            newNums.push((nums[i]+nums[i+1]) % 10);
        };

    };

    if(newNums.length<2){
        return newNums[0]
    }else{
        return triangularSum(newNums);
    };
};

// FASTEST SOLUTION

var triangularSum = function(nums) {
    let len = nums.length;
    while(len > 1){

        for(let i = 1; i < nums.length; i++){
            let sum =  nums[i - 1] + nums[i];
            sum = sum % 10;
            nums[i - 1] = sum;
        }
        nums.pop()
        len = nums.length;
    }
    return nums;
};

//given an array of integers from 0-9, inclusive, (nums)
//return an integer that is the result of summing the adjoining elements % 10 to produce a new array (newNums) until there is only a single integer left, the integer that needs to be returned
//console.log(triangularSum([1,2,3,4,5]), 8);
//console.log(triangularSum([5]), 5);
//console.log(triangularSum([6,11,13]), 1);