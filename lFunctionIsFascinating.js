// You are given an integer n that consists of exactly 3 digits.

// We call the number n fascinating if, after the following modification, the resulting number contains all the digits from 1 to 9 exactly once and does not contain any 0's:

// Concatenate n with the numbers 2 * n and 3 * n.
// Return true if n is fascinating, or false otherwise.

// Concatenating two numbers means joining them together. For example, the concatenation of 121 and 371 is 121371.

var isFascinating = function(n) {
    // create a variable for all of the strings concatenated
    let connedString = n.toString() + (n*2).toString() + (n*3).toString();

    // create an array of integers 1-9;
    let arr = [1,2,3,4,5,6,7,8,9];

    // split connedString into an array of strings
    let arrOfStr = connedString.split("");

    // change all elements of arrOfStr to integers
    let nums = arrOfStr.map(el => {
        return Number(el);
    });

    // sort nums
    let order = nums.sort((a,b)=>a-b);

    // check the length of the new array, if it is less than 9, return false
    if (order.length<9) {
        return false
    }

    // loop through noDupes and compare with arr, if not the same, return false; else true
    for (let i=0; i<order.length; i++) {
        if (order[i] !== arr[i]) {
            return false
        }
    }
    return true
};

// given an integer (n) and the definition of a fascinating number being an integer that has every digit from 1-9 with no 0's exactly once; steps to figure out the result are taking n and concatenating it with n*2 and then n*3
// return true if the result is a fascinating number, false if it is not
// console.log(isFascinating(192); true);
// console.log(isFascinating(100); false);