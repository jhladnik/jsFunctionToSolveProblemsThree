// You are given two strings of the same length s and t. In one step you can choose any character of t and replace it with another character.

// Return the minimum number of steps to make t an anagram of s.

// An Anagram of a string is a string that contains the same characters with a different (or the same) ordering.

var minSteps = function(s, t) {
    // change s and t to arrays of strings
    let arrOfS = s.split("");
    let arrOfT = t.split("");

    // create a couple of hashmaps
    let strSMap = new Map();
    let strTMap = new Map();

    // loop through arrOfS and map the elements
    for (let str of arrOfS) {
        strSMap.set(str, (strSMap.get(str) || 0)+1);
    }

    // loop through arrOfT and map the elements
    for (let strT of arrOfT) {
        strTMap.set(strT, (strTMap.get(strT) || 0)+1)
    }

    // Initialize the minimum steps required
    let steps = 0;

    // Compare the maps
    for (let [char, count] of strSMap) {
        // If the character is also in strTMap, subtract its count in strTMap from its count in strSMap
        // to find out how many characters need to be changed/added.
        // If the character isn't in strTMap at all, then all occurrences of it in s need to be changed/added.
        let countInT = strTMap.get(char) || 0;
        if (count > countInT) {
            steps += count - countInT;
        }
    }
    return steps
};

// given two strings (s) and (t) of the same length; one letter in t can be replaced per step
// return an integer that represents the minimum number of steps it takes to
// make t an anagram of s
// console.log(minSteps("bab", "aba"); 1);
// console.log(minSteps("leetcode", "practice"); 5);
// console.log(minSteps("anagram", "mangaar"); 0);