// A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each of the words consists of only uppercase and lowercase English letters (no punctuation).

// For example, "Hello World", "HELLO", and "hello world hello world" are all sentences.
// You are given a sentence s​​​​​​ and an integer k​​​​​​. You want to truncate s​​​​​​ such that it contains only the first k​​​​​​ words. Return s​​​​​​ after truncating it.

var truncateSentence = function(s, k) {
    //change the string to an array with only k amount of entries, join back to a string
    return s.split(" ",k).join(" ")
};

//given a string of words (s); the words can be both upper and lowercase; also given an integer (k)
//return a string of words, the string should be of k length
//console.log(truncateSentence("Hello how are you Contestant",4), "Hello how are you")
//console.log(truncateSentence("What is the solution to this problem", 4), "What is the solution")
//console.log(truncateSentence("chopper is not a tanuki", 5), "chopper is not a tanuki")