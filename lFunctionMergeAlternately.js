// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

// Return the merged string.

var mergeAlternately = function(word1, word2) {
    //create an empty array; check to see which string is the longest with a conditional; change the strings into arrays; loop through the words using the longest strings length; pushing the letters into the empty array; change the array to a string and return
    const merged = [];
    const arrWord1 = word1.split("");
    const arrWord2 = word2.split("");

    if(arrWord1.length>=arrWord2.length){
        for (let i=0; i<arrWord1.length; i++){
            merged.push(arrWord1[i]);
            merged.push(arrWord2[i]);
        }
    }else{
        for (let i=0; i<arrWord2.length; i++){
            merged.push(arrWord1[i]);
            merged.push(arrWord2[i]);
        }
    }
    return merged.join("")
};

//given 2 strings (word1 and word2)of varying lengths
//return a string that is composed of both of the strings (starting with word1 string), the letters alternating; if one of the strings has more letters than the other, the extra letters should be appended to the end of the merged string
//console.log(mergeAlternately("abc", "pqr"), "apbqcr");
//console.log(mergeAlternately("ab", "pqrs"), "apbqrs");
//console.log(mergeAlternately("abcd", "pq"), "apbqcd");