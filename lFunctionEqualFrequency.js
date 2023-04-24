// You are given a 0-indexed string word, consisting of lowercase English letters. You need to select one index and remove the letter at that index from word so that the frequency of every letter present in word is equal.

// Return true if it is possible to remove one letter so that the frequency of all letters in word are equal, and false otherwise.

// Note:

// The frequency of a letter x is the number of times it occurs in the string.
// You must remove exactly one letter and cannot chose to do nothing.

var equalFrequency = function(word) {
    //change word to an array (arrOfWord); create a new set (unique); check the length of the new array created by the Set vs the array that has been changed from the string, if arrOfWord.length-unique.length===1, return true, else false

    let arrOfWord = word.split("");
    let unique = [...new Set(arrOfWord)];

    return arrOfWord.length-unique.length === 1 || arrOfWord.length===unique.length ? true:false
};

//given a string of letters
//return true if you can remove one instance of one of the letters and all of the other letters in the string will then occur the same amount of times, else false
//console.log(equalFrequency("abcc"), true);
//console.log(equalFrequency("aazz"), false);