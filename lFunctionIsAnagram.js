// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

var isAnagram = function(s, t) {
    //sort the lists to find if all of the same letters land in the same
    //indices if the strings are the same length
    function createCharMap(text){
        let charMap ={};
        
        for (let char of text){
            if(charMap.hasOwnProperty(char)){
                charMap[char]++
            }else{
                charMap[char]=1
            }
        }
        return charMap
    }
    if(s.length==t.length){
        let sMap = createCharMap(s);
        let tMap = createCharMap(t);
        for (let char in sMap){
            if(sMap[char]!== tMap[char]){
                return false
            }
        }
        return true
    }else{
        return false
    }
};

//given two strings; both consisting of lowercase letters
//return true if string "t" is an anagram of string "s"; return
//false if it is not an anagram
//input(s="rat", t="car"), output(false);
//input(s="anagram", t="nagaram"), output(true)