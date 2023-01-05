// Reversing an integer means to reverse all its digits.

// For example, reversing 2021 gives 1202. Reversing 12300 gives 321 as the leading zeros are not retained.
// Given an integer num, reverse num to get reversed1, then reverse reversed1 to get reversed2. Return true if reversed2 equals num. Otherwise return false.

var isSameAfterReversals = function(num) {
    //change the integer to a string, then an array, then reverse; use parseInt on this result; change the new integer back to a string and then an array, then reverse and use parseInt again; if this result equals original num, true, else false
    let reversed = num.toString().split("").reverse().join("");
    let numReversed = parseInt(reversed);
    let forward = numReversed.toString().split("").reverse().join("");

    return parseInt(forward)===num ? true:false
};

//given an integer
//return true if after reversing the integer and reversing it back yields the same integer, false if it does not (leading zeros are not retained when reversing)
//console.log(isSameAfterReversals(526), true);
//console.log(isSameAfterReversals(1800), false);
//console.log(isSameAfterReversals(0), true);