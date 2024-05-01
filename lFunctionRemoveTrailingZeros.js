// Given a positive integer num represented as a string, return the integer num without trailing zeros as a string.

var removeTrailingZeros = function(num) {
    // split num into an array and reverse
    let arrRev = num.split("").reverse();

    // create an empty array for holding some strings
    let arr = [];

    // loop through arrRev and use a conditional to see what subs are "0"
    for (let i=0; i<arrRev.length; i++) {
        if (arr.length > 0 && arrRev[i] === "0") {
            arr.push(arrRev[i]);
        } else if (arrRev[i] !== "0") {
            arr.push(arrRev[i])
        }
    }

    // reverse arr and join, then return
    return arr.reverse().join("")
};

// given a string of integers
// return the string with no trailing "0"
// console.log(removeTrailingZeros("51230100"); "512301");
// console.log(removeTrailingZeros("123"); "123")