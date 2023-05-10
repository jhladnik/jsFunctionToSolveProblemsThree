// Given a string s and an array of strings words, determine whether s is a prefix string of words.

// A string s is a prefix string of words if s can be made by concatenating the first k strings in words for some positive k no larger than words.length.

// Return true if s is a prefix string of words, or false otherwise.

var isPrefixString = function(s, words) {
    //change s to an array (arrS); change words into an array of single strings (arrWords); loop through arrS and check against arrWords, return false if something isn't the same; return true
    let arrS = s.split("");
    let arrWords = words.join("").split("");

    for(let i=0; i<arrS.length; i++){
        if(arrS[i]!==arrWords[i]){
            return false;
        };
    };

    let lengths = [];

    for(let j=0; j<words.length; j++){
        if(lengths.length<1){
            lengths.push(words[j].length);
        }else{
            lengths.push(words[j].length+lengths[lengths.length-1]);
        };
    };
    if(lengths.indexOf(s.length)===-1){
        return false;
    };
    return true;
};

//given a string (s); given an array of strings (words)
//return true if s can be created by concatenating the elements of words, else return false
//console.log(isPrefixString("iloveleetcode", ["i", "love", "leetcode", "apples"]), true);
//console.log(isPrefixString("iloveleetcode", ["apples","i","love","leetcode"]), false);