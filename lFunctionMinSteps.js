// You are given two strings of the same length s and t. In one step you can choose any character of t and replace it with another character.

// Return the minimum number of steps to make t an anagram of s.

// An Anagram of a string is a string that contains the same characters with a different (or the same) ordering.

var minSteps = function(s, t) {
    // change s and t to arrays of strings
    let arrOfS = s.split("");
    let arrOfT = t.split("");

    // create a counter for the steps
    let steps = 0;

    // loop through arrOfT
    for (let i=0; i<arrOfT.length; i++) {
        // use a conditional to see if the string is in arrOfS, if it is splice
        // it out
        if (!arrOfS.includes(arrOfT[i])) {
            steps++
        } else {
            arrOfS.splice(arrOfS.indexOf(arrOfT[i]), 1)
        }
    }

    // return the difference of the two array lengths
    return steps

};

// given two strings (s) and (t) of the same length; one letter in t can be replaced per step
// return an integer that represents the minimum number of steps it takes to
// make t an anagram of s
// console.log(minSteps("bab", "aba"); 1);
// console.log(minSteps("leetcode", "practice"); 5);
// console.log(minSteps("anagram", "mangaar"); 0);