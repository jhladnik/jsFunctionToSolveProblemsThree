// Given a string s, find the length of the longest 
// substring without repeating characters.

var lengthOfLongestSubstring = function(s) {
    // Track the maximum length of non-repeating substrings
    let maxLen = 0;
    // Start of the current substring
    let start = 0;
    // Set to store characters in the current substring
    let charSet = new Set();

    for (let i = 0; i < s.length; i++) {
        // If the character is in the set, it's a repeat, and we need to adjust the start
        while (charSet.has(s[i])) {
            // Remove the char at 'start' and move 'start' forward
            charSet.delete(s[start]);
            start++;
        }
        // Add the current character to the set
        charSet.add(s[i]);
        // Update maxLen if we've found a longer substring
        maxLen = Math.max(maxLen, i - start + 1);
    }
    return maxLen;
};

// given a string of characters
// return the length of the longest substring that has no repeating characters
// console.log(lengthOfLongestSubstring("abcabcbb"); 3);
// console.log(lengthOfLongestSubstring("bbbbbb"); 1);
// console.log(lengthOfLongestSubstring("pwwkew"); 3);