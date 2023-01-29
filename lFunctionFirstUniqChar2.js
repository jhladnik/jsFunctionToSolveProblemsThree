// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

//***Rethought about solution for this problem while thinking about how the first solution was very poor on speed and memory usage

var firstUniqChar = function(s) {
    //loop through the string and check if the first index of the character is the last as well; if it is, return the index number; else return -1
    for(let i=0; i<s.length; i++){
        if(s.indexOf(s[i])===s.lastIndexOf(s[i])){
            return i;
        };
    };
    return -1;
};

//given a string
//return the index of the first non-repeating character in the string; if there is no non-repeating character, return -1
//console.log(firstUniqChar("leetcode"), 0);
//console.log(firstUniqChar("loveleetcode"), 2);
//console.log(firstUniqChar("aabb"), -1);