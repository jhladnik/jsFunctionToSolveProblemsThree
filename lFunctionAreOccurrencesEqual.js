// Given a string s, return true if s is a good string, or false otherwise.

// A string s is good if all the characters that appear in s have the same number of occurrences (i.e., the same frequency).

var areOccurrencesEqual = function(s) {
    //create a hashmap of the string; grab the values from the hashtable and put them into an array; loop through the array and see if one element has a greater frequency than any other, if it does, throw false, else true
        let letterMap = new Map();
        for (let strs of s) {
            letterMap.set(strs, (letterMap.get(strs) || 0) + 1);
        };
        let vals = Array.from(letterMap.values());

        for(let i=1; i<vals.length; i++){
            if(vals[i]!==vals[i-1]){
                return false
            }
        };
        return true
};

//given a string of characters; given the definition of a "good" string being a string that every unique character occurs at the same frequency
//return true if the given string is "good", else return false
//console.log(areOccurrencesEqual("abacbc"), true);
//console.log(areOccurrencesEqual(aaabb), false);