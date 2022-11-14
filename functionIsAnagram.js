// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

// write the function isAnagram
var isAnagram = function(test, original) {
    //we need to make sure that the test and original are going to be the same case, but I want to sort them and put them back to strings for uhhh...reasons
    let makeTestSame = test.toLowerCase().split("").sort().join("");
    let makeOrgSame = original.toLowerCase().split("").sort().join("");
    //lets make a conditional to find if they are the same length now and if they are the same letter for letter, if not...bears eat beets
    if(makeTestSame == makeOrgSame){
      return true
    }else{
      return false
    }
};
  
//given two strings as arguments, the test and the original
//return true if the test is an anagram of the original, or return false if the test is not an anagram of the original
//input("ofcfee", "Coffee"), output(true); input("mgGnaraa", "anagram"), output("false")
  