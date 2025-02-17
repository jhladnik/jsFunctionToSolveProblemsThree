// A self-dividing number is a number that is divisible by every digit it contains.

// For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.
// A self-dividing number is not allowed to contain the digit zero.

// Given two integers left and right, return a list of all the self-dividing numbers in the range [left, right] (both inclusive).

var selfDividingNumbers = function(left, right) {
    // create an empty array (arr); loop from left to and including right; change the integer to a string, split it; create another empty array (holder) on each iteration; loop through the new array of strings, check to see if the original integer is divisible by the integer version of that string, if true, push the string to holder; check to see if holder is the same length as our array of strings, if so, push to arr; return arr when the loop is complete
    let arr = [];

    for (let i=left; i<=right; i++) {
        let strInt = i.toString().split("");

        let holder = [];

        for (let j=0; j<strInt.length; j++) {
            let backToInt = parseInt(strInt[j]);
            if (i % backToInt === 0){
                holder.push(strInt[j])
            }
        }

        if (holder.length===strInt.length) {
            arr.push(i)
        }
    }

    return arr
};

// Given two integers (left) and (right); given the definition of a self-dividing number is one that is divisible by every digit it contains except for 0
// Return an array of integers that must be between and inclusive of left and right that are self-dividing
// console.log(selfDividingNumbers(1,2), [1,2,3,4,5,6,7,8,9,11,12,15,22]);
// console.log(selfDividingNumbers(47,85), [48,55,66,77]);