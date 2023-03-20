// Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2), ..., (an, bn) such that the sum of min(ai, bi) for all i is maximized. Return the maximized sum.

var arrayPairSum = function(nums) {
    //sort the array in increasing value order; create an empty array; loop through the array given and push any even index to the created array; reduce the created array; return
    nums.sort((a,b)=>a-b);
    let lowestVals = [];

    for(let i=0; i<nums.length; i++){
        if(i%2===0){
            lowestVals.push(nums[i]);
        }
    };
    return lowestVals.reduce((acc,c)=>acc+c,0);
};

//given an array of integers; the array needs to be arranged so that there are pairs of integers (subarrays) that maximize the sum of each pair
//return the sum of all of the smallest valued elements in these subarrays
//console.log(arrayPairSum([1,4,3,2]), 4);
//console.log(arrayPairSum([6,2,6,5,1,2]), 9);