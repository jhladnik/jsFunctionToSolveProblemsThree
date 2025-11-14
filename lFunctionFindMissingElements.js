// You are given an integer array nums consisting of unique integers.

// Originally, nums contained every integer within a certain range. However, some integers might have gone missing from the array.

// The smallest and largest integers of the original range are still present in nums.

// Return a sorted list of all the missing integers in this range. If no integers are missing, return an empty list.

var findMissingElements = function(nums) {
    // Find the length of nums
    let len = nums.length

    // Initialize an empty array to hold our results
    let missing = [];

    // Sort nums to be in ascending order
    nums.sort((a,b) => a-b);

    // Initalize another empty array and loop from the lowest to and including the highest value in nums, push to array
    let compArr = [];

    for (let i=Math.min(...nums); i<Math.max(...nums); i++) {
        compArr.push(i)
    };

    // Loop through compArr and use a conditional to see if the element is contained in nums, if not push to missing
    for (let j=0; j<compArr.length; j++) {
        if (!nums.includes(compArr[j])) {
            missing.push(compArr[j])
        }
    }

    // Return missing
    return missing
    
};

// Given an array of integers "nums" that contains integers ranging from Math.min(...nums) to Math.max(...nums); some integers in the range may be missing
// Return an array of integers that are the integers missing in the range of nums
// console.log(findMissingElements([1,4,2,5]), [3]);
// console.log(findMissingElements([7,8,6,9]), []);
// console.log(findMissingElements([5,1]), [2,3,4]);