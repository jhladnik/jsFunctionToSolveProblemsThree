// You are given an integer array nums.

// You replace each element in nums with the sum of its digits.

// Return the minimum element in nums after all replacements.

var minElement = function(nums) {
    // create an empty array to hold the sums; loop through nums; on every iteration, change nums[i] to a string, split it, change the new elements back to integers and sum; if sum === 0, return 0, else push the sum into the empty array; after loop return the minimum value of the new array
    let summedNums = [];

    for (let i=0; i<nums.length; i++) {
        let strArr = nums[i].toString().split("");
        let mappedNums = strArr.map(el => {
            return parseInt(el)
        })
        let sum = mappedNums.reduce((acc,c) => acc+c, 0);
        
        if (sum === 0) {
            return 0
        }
        summedNums.push(sum)
    }

    return Math.min(...summedNums);
};

// given an array of integers (nums)
// return the smallest value if every element has the digits split and summed
// console.log(minElement([1,2,3,4]), 1);
// console.log(minElement([10,12,13,14]), 1);
// console.log(minElement([999,19,199]), 10);