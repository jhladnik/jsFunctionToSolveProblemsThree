// Given an integer array nums, return the number of elements that have both a strictly smaller and a strictly greater element appear in nums.

var countElements = function(nums) {
    //create a counter (counter); loop through nums and if the element is not the greatest or the smallest in nums, increment the counter; return counter outside of loop
    let counter =  0; 

    for(let i=0; i<nums.length; i++){
        if(nums[i] !== Math.max(...nums) && nums[i] !== Math.min(...nums)){
            counter++;
        }
    };
    return counter
};

//given an array of integers; integers can be negative or positive in value
//return the amount of elements in the given array that is neither the largest or smallest value in the array
//console.log(countElements([11,7,2,15]), 2);
//console.log(countElements(-3,3,3,90), 2);
//console.log(countElements([0]), 0)