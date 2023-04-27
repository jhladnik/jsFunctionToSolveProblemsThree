// A fancy string is a string where no three consecutive characters are equal.

// Given a string s, delete the minimum possible number of characters from s to make it fancy.

// Return the final string after the deletion. It can be shown that the answer will always be unique.

var makeFancyString = function(s) {
    //create an empty string; loop through the given string and use a conditional to see if a character occurs 3 times in a row, if it does, skip it, if it doesn't, add to the empty string; return the newly created string
    let fanC = "";

    for(let i=0; i<=s.length; i++){
        if(s[i]===s[i+1] && s[i]===s[i+2]){

        }else{
            fanC = fanC+s[i];
        };
    };
    return fanC
};

//given a string; given the  definition of a fancy string being a string that has no characters that are in the string, three consecutive times
//return the string after making it fancy
//console.log(makeFancyString("leeetcode"), "leetcode");
//console.log(makeFancyString("aaabaaaa"), "aabaa");
//console.log(makeFancyString("aab"), "aab");