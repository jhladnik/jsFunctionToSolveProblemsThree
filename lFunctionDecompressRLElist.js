// We are given a list nums of integers representing a list compressed with run-length encoding.

// Consider each adjacent pair of elements [freq, val] = [nums[2*i], nums[2*i+1]] (with i >= 0).  For each such pair, there are freq elements with value val concatenated in a sublist. Concatenate all the sublists from left to right to generate the decompressed list.

// Return the decompressed list.

var decompressRLElist = function(nums) {
    //create an empty array; loop through nums; use a conditional in nums that if i%2===0, push to the created array a new filled array; return the created array after using the flat method to make sure we have all of the integers in one combined list
    let freqNums = [];

    for (let i=0; i<nums.length; i++){
        if (i%2===0){
            freqNums.push(Array(nums[i]).fill(nums[i+1]));
        };
    };
    return freqNums.flat()
};

//given an array of integers that is to represent a list compressed with run-length encoding
//return a decompressed list meaning that the first integer in the list (n) should occur (n+1) times in the new array/list
//console.log(decompressRLElist([1,2,3,4]), [2,4,4,4]);
//console.log(decompressRLElist([1,1,2,3]), [1,3,3]) 