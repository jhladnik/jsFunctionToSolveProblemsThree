// You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.

// Return the sum of all the unique elements of nums.

var sumOfUnique = function(nums) {
    //filter through the array for the values that have the .indexOf() the value being the same as the .lastIndexOf() the value; return the sum of the new array
    let uniq = nums.filter(el=>nums.indexOf(el)===nums.lastIndexOf(el));
    return uniq.reduce((acc,c)=>acc+c, 0);
};

//given an array of integers
//return the sum of all integers that are not repeating in the array
//console.log(sumOfUnique([1,2,3,2]), 4);
//console.log(sumOfUnique([1,1,1,1,1]), 0);
//console.log(sumOfUnique([1,2,3,4,5]), 15);