/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    //flip the input to give us something to measure against
    let flipped = x.toString().split("").reverse().join("");
    //change the original number to a string
    let strX = x.toString();
    return strX===flipped
};

//given an integer, can be positive or negative
//return true if the number is a palindrome (reads the same from left to right
//as right to left)
//input(1221), output(true);
//input(0), output(true);
//input(-1221), output(false)