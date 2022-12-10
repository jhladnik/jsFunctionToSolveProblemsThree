// Given an array of integers nums, return the number of good pairs.

// A pair (i, j) is called good if nums[i] == nums[j] and i < j.

var numIdenticalPairs = function(nums) {
    // loop through nums, nest another loop to compare the numbers of nums with each nums element, use a
    //conditional to find which elements are equal to eachother and make sure that the two indices are not the same
    let holder = [];
    for (let i=0; i<nums.length; i++){
        for (let j=0; j<nums.length; j++){
            if(nums[j]==nums[i] && j>i){
                holder.push([i,j])
            }
        }
    }
    return holder.length
};

//given an array of integers; can be from 1 to 100; less than 100 elements total
//return the number of good pairs; a good pair is (i,j) where nums[i]==nums[j] and i<j
//console.log(numIdenticalPairs([1,2,3,1,1,3]), 4);
//console.log(numIdenticalPairs([1,1,1,1]), 6);
//console.log(numIdenticalPairs([1,2,3]), 0);