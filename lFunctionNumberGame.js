// You are given a 0-indexed integer array nums of even length and there is also an empty array arr. Alice and Bob decided to play a game where in every round Alice and Bob will do one move. The rules of the game are as follows:

// Every round, first Alice will remove the minimum element from nums, and then Bob does the same.
// Now, first Bob will append the removed element in the array arr, and then Alice does the same.
// The game continues until nums becomes empty.
// Return the resulting array arr.


var numberGame = function(nums) {
    // create an empty array
    let arr = [];

    // find the original length of nums and store it
    let originalLeng = nums.slice(0).length

    // use a while loop to perform the operations and push results to empty array
    // until the new array is the same length as the original nums
    while (arr.length < originalLeng) {
        let smol = Math.min(...nums);
        nums.splice(nums.indexOf(smol), 1);
        let secondSmol = Math.min(...nums);
        nums.splice(nums.indexOf(secondSmol), 1);
        arr.push(secondSmol);
        arr.push(smol);
    }
    // return array
    return arr
};

// given an array of integers (nums)
// return an array of integers such that if userA was to remove the smallest
// and userB was then to remove the smallest; then userB is to place their integer
// into a new array followed by userA into the same array until all of nums is gone
// console.log(numberGame([5,4,2,3]); [3,2,5,4]);
// console.log(numberGame([2,5]); [5,2]);