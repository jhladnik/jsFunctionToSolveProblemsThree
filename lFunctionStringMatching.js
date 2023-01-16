// Given an array of string words, return all strings in words that is a substring of another word. You can return the answer in any order.

// A substring is a contiguous sequence of characters within a string

var stringMatching = function(words) {
    //create an empty array for holding the strings needing to be returned; loop over the given array; nest a loop in the first loop; use conditional to see if the element is contained in any other elements other than itself, push to array if it is; remove any duplicates in the array; return the array
    let contained = [];
    for(let i=0; i<words.length; i++){
        for(let j=0; j<words.length; j++){
            if(j!==i && words[i].includes(words[j])){
                contained.push(words[j])
            }
        }
    }
    return [...new Set(contained)]
};

//given an array if strings
//return an array of the strings of the array that are used as parts of other strings in the array
//console.log(stringMatching(["mass","as","hero","superhero"]), ["as","hero"]);
//console.log(stringMatching(["leetcode","et","code"]), ["et","code"]);
//console.log(stringMatching(["blue","green","bu"]), []);