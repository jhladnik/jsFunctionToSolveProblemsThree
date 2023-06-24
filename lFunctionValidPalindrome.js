// Given a string s, return true if the s can be palindrome after deleting at most one character from it.

var validPalindrome = function(s) {
    let left = 0;
    let right = s.length - 1;
  
    while (left < right) {
        if (s[left] !== s[right]) {
        // Try deleting the character at the left index or the right index
         return isPalindromeInRange(s, left + 1, right) || isPalindromeInRange(s, left, right - 1);
        }   
        left++;
        right--;
    }
  
    return true;
};

function isPalindromeInRange(s, left, right) {
    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};