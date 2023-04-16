// A sentence is a string of single-space separated words where each word consists only of lowercase letters.

// A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

// Given two sentences s1 and s2, return a list of all the uncommon words. You may return the answer in any order.

var uncommonFromSentences = function(s1, s2) {
    //make both of the sentences/strings into one array of strings; return a filter of the new array where only the words/strings that have one index location should pass
    let arrS1 = s1.split(" ");
    let arrS2 = s2.split(" ");
    let arrS3 = arrS1.concat(arrS2);

    return arrS3.filter(el=>arrS3.indexOf(el)===arrS3.lastIndexOf(el));
};

//given 2 strings of words; given the definition of uncommon word being if a word occurs one time in the given strings
//return an array of the uncommon words
//console.log(uncommonFromSentences("this apple is sweet", "this apple is sour"), ["sweet","sour"]);
//console.log(uncommonFromSentences("apple apple","banana"), ["banana"]);