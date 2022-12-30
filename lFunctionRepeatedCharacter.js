// Given a string s consisting of lowercase English letters, return the first letter to appear twice.

var repeatedCharacter = function(s) {
    //create a hashmap of the characters in the string by first creating the containing object, then loop over the string; use a conditional to see if the character exists in the hashmap already, if it does, return it...if it doesn't create the key and add value of 1
    let charMap = {};

    for (let char of s){
        if(charMap.hasOwnProperty(char)){
            return char;
        }else{
            charMap[char]=1;
        }
    }
};

//given a string of lowercase letters; atleast one of the letters will appear twice
//return the letter/string that appears twice, first
//console.log(repeatedCharacter("abccbaacz"), "c");
//console.log(repeatedCharacter("abcdd"), "d");