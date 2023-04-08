// Given an array of strings patterns and a string word, return the number of strings in patterns that exist as a substring in word.

// A substring is a contiguous sequence of characters within a string.

var numOfStrings = function(patterns, word) {
    //create a counter to increment as we come across a substring in patterns that exists in word; loop through patters, use a conditional to see if the element exists in word, if it does, increment the counter; return the counter
    let subs = 0;

    for(let i=0; i<patterns.length; i++){
        if(word.includes(patterns[i])){
            subs++;
        };
    };
    return subs
};

//given an array of strings (patterns); given a string (word)
//return the number of patterns that exist in word
//console.log(numOfStrings(["a","abc","bc","d"], "abc"), 3);
//console.log(numOfStrings(["a", "b", "c"], "aaaaabbbbb"), 2);
//console.log(numOfStrings(["a", "a", "a"], "ab"), 3);