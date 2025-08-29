// You are given a string s consisting of lowercase English letters ('a' to 'z').

// Your task is to:

// Find the vowel (one of 'a', 'e', 'i', 'o', or 'u') with the maximum frequency.
// Find the consonant (all other letters excluding vowels) with the maximum frequency.
// Return the sum of the two frequencies.

// Note: If multiple vowels or consonants have the same maximum frequency, you may choose any one of them. If there are no vowels or no consonants in the string, consider their frequency as 0.

// The frequency of a letter x is the number of times it occurs in the string.

var maxFreqSum = function(s) {
    // Define vowels 
    let vowels = new Set(['a','e','i','o','u']);

    // Create two hash objects for holding 1 - the frequency of vowels, and 2 - the consonants
    let vowelMap = {};
    let conMap = {};

    for (const ch of s) {
        if (vowels.has(ch)) vowelMap[ch] = (vowelMap[ch] || 0) + 1;
        else conMap[ch] = (conMap[ch] || 0) + 1;
    }

    // Sort values of vowelMap in decreasing order
    const vows = Object.values(vowelMap).sort((a,b) => b-a);

    // Sort values of conMap in decreasing order
    const cons = Object.values(conMap).sort((a,b) => b-a);

    // Find first value of each or is there nothing in the array at all
    let firstVow = vows[0] ?? 0;
    let firstCon = cons[0] ?? 0;

    // Return sum
    return firstVow + firstCon
};

// Given a string of all lowercase letters; given values of "a", "e", "i", "o", "u" are considered vowels and every other letter is a consonant
// Return the sum of the most frequently used vowel and consonant
// console.log(maxFreqSum("successes"), 6);
// console.log(maxFreqSum("aeiaeia"), 3);