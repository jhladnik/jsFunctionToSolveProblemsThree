// Given an input string s, reverse the order of the words.

// A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

// Return a string of the words in reverse order concatenated by a single space.

// Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

var reverseWords = function(s) {
    //remove any extra spaces between words and at the beginning and end    of the string, then reverse the string
    let noXtra = s.replace(/\s+/g,' ').trim();
    return noXtra.split(" ").reverse().join(" ")
};

//given a string of words; string can contain spaces at the beginning or at the end of the string; words can also be separated by more than one space
//return the string with the word order reveresed, with one space between the words and no spaces at the beginning or the end of the string
//input('the sky is blue'), output('blue is sky the');
//input(' hello world '), output('world hello');
//input('a good  example'), output('example good a')
