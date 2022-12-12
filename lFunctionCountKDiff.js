// Given an integer array nums and an integer k, return the number of pairs (i, j) where i < j such that |nums[i] - nums[j]| == k.

var countKDifference = function(nums, k) {
    //create an empty array; loop through the given array, then nest a loop to iterate over the first loop's iterator; use a conditional to find the pairs that match the given parameters, push the pairs to the empty array and return the length of the created array
    const pairs = [];
    for (let i=0; i<nums.length; i++){
        for (let j=0; j<nums.length; j++){
            if( nums[i]-nums[j]==k ){
                pairs.push([i,j])
            }
        }
    }
    return pairs.length
};

//given an array if integers and a standalone integer (k)
//return the amount of pairs that: i<j and nums[i]-nums[j] == k
//console.log(countKDifference([1,2,2,1],1), 4);
//console.log(countKDifference([1,3],3), 0);
//console.log(countKDifference([3,2,1,5,4],2), 3);