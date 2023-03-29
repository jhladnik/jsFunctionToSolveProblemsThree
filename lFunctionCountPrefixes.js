// You are given a string array words and a string s, where words[i] and s comprise only of lowercase English letters.

// Return the number of strings in words that are a prefix of s.

// A prefix of a string is a substring that occurs at the beginning of the string. A substring is a contiguous sequence of characters within a string.

var countPrefixes = function(words, s) {
    //create an empty string; create a counter; loop through s adding each substring to the empty string; nest a loop and loop through words to see if any of them equal the created string, if they do, increment the counter; return the counter after all the iterations are completed
    let str = "";
    let prefix = 0;

    for(let i=0; i<s.length; i++){
        str=str+s[i];
        for(let j=0; j<words.length; j++){
            if(words[j]===str){
                prefix++;
            }
        };
    };
    return prefix;
};

//given an array of strings (words); given s which is a string
//return the number of elements in words is a prefix for s
//console.log(countPrefixes(["a","b","c","ab","bc","abc"], "abc"), 3);
//console.log(countPrefixes(["a","a"], "aa"), 2);