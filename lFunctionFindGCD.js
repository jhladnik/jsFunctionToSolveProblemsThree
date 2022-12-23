// Given an integer array nums, return the greatest common divisor of the smallest number and largest number in nums.

// The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.

var findGCD = function(nums) {
    //sort the array from smallest to greatest; loop from the smallest number to 1 to find the largest first using conditional, return integer
    nums.sort((a,b)=>a-b);
    for (let i=nums[0]; i>=1; i--){
        if(nums[nums.length-1]%i===0 && nums[0]%i===0){
            return i
        }
    }
};

//given an array of integers
//return the largest common divisor of the largest and the smallest number in the array
//console.log(findGCD([2,5,6,9,10]), 2);
//console.log(findGCD([7,5,6,8,3]), 1);
//console.log(findGCD([3,3]), 3);