// Given a 0-indexed integer array nums of length n and an integer k, return the number of pairs (i, j) where 0 <= i < j < n, such that nums[i] == nums[j] and (i * j) is divisible by k.

var countPairs = function(nums, k) {
    //create an empty array; loop over the given array; create another loop to loop over the iterator of the first loop;
    //create a conditional with the conditions given, run pairs through and push to new array if they satisfy;
    //return length of the new array
    const divisible = [];
    for (let i=0; i<nums.length; i++){
        for (let j=0; j<nums.length; j++){
            if(nums[i]==nums[j] && i<j && (i*j)%k===0){
                divisible.push(1)
            }
        }
    }
    return divisible.length
};

//given an array of integers of (n) length and the integer of (k)
//return the number of pairs that satisfy the conditions: nums[i] == nums[j]; i<j<n; (i*j)%k===0
//console.log(countPairs([3,1,2,2,2,1,3], 2), 4);
//console.log(countPairs([1,2,3,4], 1), 0);