// Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice.

// You must write an algorithm that runs in O(n) time and uses only constant extra space.

var findDuplicates = function(nums) {
    //sort the array in increasing order; create two empty arrays, one for elements that occur one time (singles) and the other array for the elements that occur twice (dupes); loop through the array using a conditional to test if the element is in the singles array already, if it is not, send it, if it is in singles already, throw it in dupes; return dupes
    nums.sort((a,b)=>a-b);

    let singles = [];
    let dupes = [];

    for(let i=0; i<nums.length; i++){
        if(singles.indexOf(nums[i])===-1){
            singles.push(nums[i]);
        }else{
            dupes.push(nums[i]);
        };
    };
    return dupes
};

//top answer
var findDuplicates = function(nums) {
    let res = [];
    for (let i = 0; i < nums.length;i++) {
        let index = Math.abs(nums[i])-1;
        if (nums[index] < 0) res.push(index+1);
        nums[index] = -nums[index];
    }
    return res;
};

//given an array of integers from 1 to n with each integer occuring once or twice
//return an array of the integers that occur twice and the algo should run 0(n) and use constant extra space
//console.log(findDuplicates([4,3,2,7,8,2,3,1]), [2,3]);
//console.log(findDuplicates([1,1,2]), [1]);
//console.log(findDuplicates([1]), []);