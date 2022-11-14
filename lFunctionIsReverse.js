// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

var isPalindrome = function(s) {
    //remove all characters in the string outside of letters, make lowercase and remove whitespace
    let justLet = s.toLowerCase().replace(/[^a-z0123456789]/g,'').trim();
    //reverse the string for comparison purposes
    let revJustLet = justLet.split("").reverse().join("");
    //return the result seeing if the reverse is the same as the forward
    return justLet===revJustLet
};

//given a string of words, symbols, and numbers
//return "true" if the string is the same forwards and backwards with all symbols and numbers removed
//and all letters made to lowercase; return "false" if it is not the same forwards and backwards
//input(""A man, a plan, a canal: Panama""), output(true);
//input("race a car"), output(false)
//input(" "), output(true)