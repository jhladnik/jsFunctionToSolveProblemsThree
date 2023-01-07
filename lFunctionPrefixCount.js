// You are given an array of strings words and a string pref.

// Return the number of strings in words that contain pref as a prefix.

// A prefix of a string s is any leading contiguous substring of s.

var prefixCount = function(words, pref) {
    //use split method to take the first (pref.length) amount letters off of each of the elements in the given array, give us an array of pref.length strings to work with; return the length of the filtered array when filtering for the pref
    let arrOfWords = words.map(w=>w.split("", pref.length).join(""));
    return arrOfWords.filter(el=>el===pref).length;
};

//given an array of strings and a prefix (pref)
//return the number of strings that start with the prefix
//console.log(prefixCount(["pay", "attention", "practice", "attend"], "at"), 2);
//console.log(prefixCount(["leetcode", "win", "loops", "success"], "code"), 0);