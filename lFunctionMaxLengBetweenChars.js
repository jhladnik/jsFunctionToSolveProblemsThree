// Given a string s, return the length of the longest substring between two equal characters, excluding the two characters. If there is no such substring return -1.

// A substring is a contiguous sequence of characters within a string.

var maxLengthBetweenEqualCharacters = function(s) {
    //create an empty array; loop through the string; use a conditional to find .indexOf() and .lastIndexOf() are the same for the character, if they are not; push (.lastIndexOf()-1)-.indexOf() to the empty array; if the created array.length greater than 0, return Math.max(), else return -1
    let howFar = [];

    for(let i=0; i<=s.length; i++){
        if(s.indexOf(s[i]) !== s.lastIndexOf(s[i])){
            howFar.push((s.lastIndexOf(s[i])-1)-s.indexOf(s[i]))
        }
    };
    if(howFar.length>0){
        return Math.max(...howFar)
    }
    return -1
};

//given a string of characters
//return the length of the longest substring between two equal characters; if two equal characters do not exist in the string, return -1
//console.log(maxLengthBetweenEqualCharacters("aa"), 0);
//console.log(maxLengthBetweenEqualCharacters("abca"), 2);
//console.log(maxLengthBetweenEqualCharacters("cbzxy"), -1);