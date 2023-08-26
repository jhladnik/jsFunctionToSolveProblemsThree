// Given an array of strings words and a string s, determine if s is an acronym of words.

// The string s is considered an acronym of words if it can be formed by concatenating the first character of each string in words in order. For example, "ab" can be formed from ["apple", "banana"], but it can't be formed from ["bear", "aardvark"].

// Return true if s is an acronym of words, and false otherwise.

var isAcronym = function(words, s) {
    //use map to split all elements in words into arrays; map through the new formed mapped array and take the first element (firsty); join firsty and if it is the same as s, return true, else false

    let mapped = words.map(el=>el.split(""));

    let firsty = mapped.map(em=>em[0]);
    
    return firsty.join("") === s ? true:false
};

//given an array of lowercase strings (words); given a lowercase string s;
//return true if s is made up of the first sub-strings of the strings in words, in order; return false if otherwise
//console.log(isAcronym(["alice","bob","charlie"], "abc"), true);
//console.log(isAcronym(["an","apple"], "a"), false);
//console.log(isAcronym(["never","gonna","give","up","on","you"], "ngguoy"), true);