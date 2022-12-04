// Given the array of integers nums, you will choose two different indices i and j of that array. Return the maximum value of (nums[i]-1)*(nums[j]-1).

var maxProduct = function(nums) {
    //sort the array from largest to smallest, take first two elements and -1 from each', multiply
    let largest = nums.sort((a,b)=>b-a);
    return (largest[0]-1)*(largest[1]-1)
};

//given an array of integers
//return an integer which should be the sum of two of the integers in the array, the two integers for the sum should be the largest -1
//console.log(maxProduct([3,4,5,2]), 12);
//console.log(maxProduct([1,5,4,5]), 16);
//console.log(maxProduct([3,7]), 12);