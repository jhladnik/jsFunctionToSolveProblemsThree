// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

var firstUniqChar = function(s) {
    //split the string into an array; create a hashmap of the occurences of the characters; sort the map from least to greatest; check to see if the first occurence is the last occurence as well; if it is, return the s index location of the first index of the sorted array; if the first index in the sorted array is not the last, return -1
    let arrOfS = s.split("");

    let charMap = new Map();
    for(let char of arrOfS){
        charMap.set(char, (charMap.get(char) || 0) +1);
    };
    arrOfS.sort((a,b)=> {
        return charMap.get(a) - charMap.get(b)
    });
    if(s.indexOf(arrOfS[0])===s.lastIndexOf(arrOfS[0])){
        return s.indexOf(arrOfS[0]);
    }else{
        return -1
    };
};

//given a string
//return the index of the first non-repeating character in the string; if there is no non-repeating character, return -1
//console.log(firstUniqChar("leetcode"), 0);
//console.log(firstUniqChar("loveleetcode"), 2);
//console.log(firstUniqChar("aabb"), -1);