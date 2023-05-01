// Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

var uniqueOccurrences = function(arr) {
    //create a new Set of the given array; create an empty array; loop through the new Set array; use a filter in the array to see how many times any given element in the given array occurs and push to the empty array; create a new Set on the created array and if the length is the same as the created array, return true, else false
    let singularity = [...new Set(arr)];
    let occur = [];

    for(let i=0; i<singularity.length; i++){
        let nums = arr.filter(el=>el===singularity[i]).length;
        occur.push(nums);
    };
    let singles = [...new Set(occur)];
    return singles.length === occur.length ? true:false
};

//given an array of integers
//return true if the number of occurrences for each integer in the array is different; else return false
//console.log(uniqueOccurrences([1,2,2,1,1,3]), true);
//console.log(uniqueOccurrences([1,2]), false);
//console.log(uniqueOccurrences([-3,0,1,-3,1,1,1,-3,10,0]), true);