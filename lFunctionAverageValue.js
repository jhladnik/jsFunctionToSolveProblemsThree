// Given an integer array nums of positive integers, return the average value of all even integers that are divisible by 3.

// Note that the average of n elements is the sum of the n elements divided by n and rounded down to the nearest integer.

var averageValue = function(nums) {
    //use a filter (conds) to get the integers of nums that are evens and divisible by 3; sum conds and divide by the length of conds; return
    let conds = nums.filter(el => el%2 === 0 && el%3 === 0);
    let sum = 0;
 
    if(conds.length === 0){
        return 0
    }else{
         for(let i=0; i<conds.length; i++){
             sum += conds[i];
         };
 
         return Math.floor(sum/conds.length);
    }
};

//given an array of positive integers
//return the average of all of the integers in the array that are even and divisible by 3
//console.log(averageValue([1,3,6,10,12,15]), 9);
//console.log(averageValue([1,2,4,7,10]), 0);
//console.log(averageValue([6,6,6,6,6]), 6);