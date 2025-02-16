// You are given an array of positive integers nums.

// Alice and Bob are playing a game. In the game, Alice can choose either all single-digit numbers or all double-digit numbers from nums, and the rest of the numbers are given to Bob. Alice wins if the sum of her numbers is strictly greater than the sum of Bob's numbers.

// Return true if Alice can win this game, otherwise, return false.

var canAliceWin = function(nums) {
    // create two new arrays from nums, one containing only single digit elements, the other double digit elements; find the sum of each of the arrays; if the arrays are the same value, return false, else true

    let single = nums.filter(el => el < 10).reduce((acc,c) => acc+c, 0);
    let double = nums.filter(em => em > 9).reduce((acc,c) => acc+c, 0);

    return single !== double
};

// given an array of positive integers (nums)
// return false if the sum of all single-digit integers === the sum of all double-digit integers; else return true
// console.log(canAliceWin([1,2,3,4,10]), false);
// console.log(canAliceWin([1,2,3,4,5,14]), true);
// console.log(canAliceWin([5,5,5,25]), true);