// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// Examples:

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11
// However, the arrays can have varying lengths, not just limited to 4.

const binaryArrayToNumber = arr => {
    //we need to use a string for this...change it!
    let strOfArr = arr.join("");
    //return the integer from the binary string using the radix 2
    return parseInt(strOfArr,2)
};
  
//given an array which should be the equivalent of a binary number
//return what the binary number should be as a regular integer
//input([0,1,1,0]), ouput(6); input([1,0,0,1]), output(9)