// You are given two strings s and t such that every character occurs at most once in s and t is a permutation of s.

// The permutation difference between s and t is defined as the sum of the absolute difference between the index of the occurrence of each character in s and the index of the occurrence of the same character in t.

// Return the permutation difference between s and t.

var findPermutationDifference = function(s, t) {
    // create an array (arr) to hold our differences; split s to an array (sArray); loop through sArray, on each iteration, find the difference of the index of the element and the same element in t; push absolute of the result to arr; reduce arr and return the sum

    let arr = [];

    let sArray = s.split("");

    for (let i=0; i<sArray.length; i++) {
        let result = Math.abs(i - t.indexOf(sArray[i]));
        arr.push(result)
    }

    let sum = arr.reduce((acc, c) => acc+c, 0);

    return sum
};

// given two strings (s) and (t) where t is a permutation of s; given the definition of permutation difference is the sum of the absolute difference between an index of the occurence of the specific substring in s and the occurence of the same substring in t
// return the permutation difference
// console.log(findPermutationDifference("abc", "bac"), 2);
// console.log(findPermutationDifference("abcde", "edbac"), 12);