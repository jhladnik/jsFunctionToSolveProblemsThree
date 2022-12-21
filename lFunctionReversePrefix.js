// Given a 0-indexed string word and a character ch, reverse the segment of word that starts at index 0 and ends at the index of the first occurrence of ch (inclusive). If the character ch does not exist in word, do nothing.

var reversePrefix = function(word, ch) {
    //change the given string into an array; find the indexOf ch; slice from ch to end of array, change to string with no spaces (secPart); slice from beginning including ch, reverse, change to string with no spaces (firstPart); concatenate firstPart to secPart...return
    let splitIt = word.split("");
    let seek = splitIt.indexOf(ch);
    let secPart = splitIt.slice(seek+1).join("");
    let firstPart = splitIt.slice(0,seek+1).reverse().join("");
    return firstPart+secPart
};

//given a string of letters (word), and a parameter that is also a string (ch)
//return a string where the string is split; the first part ending with the first occurence of ch, and reversed; the second part should remain the same; the two parts should be joined to be one string
//console.log(reversePrefix("abcdefd", "cd"), "dcbaefd");
//console.log(reversePrefix("xyxzxe", "z"), "zxyxxe");
//console.log(reversePrefix("abcd", "z"), "abcd");