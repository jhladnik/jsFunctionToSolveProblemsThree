// Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

// A string is represented by an array if the array elements concatenated in order forms the string.

var arrayStringsAreEqual = function(word1, word2) {
    //join the elements of each array and see if they are the same
    let num1 = word1.map(el=>el.split("")).join("");
    let num2 = word2.map(em=>em.split("")).join("");
    return num1.replace(/\,/g,"")==num2.replace(/\,/g,"") ? true:false
};

//given to arrays of strings. word1 and word2
//return true if the elements of word1 are equivalent to word2 and false if they are not
//console.log(arrayStringsAreEqual(["ab", "c"],["a", "bc"])); output(true);
//console.log(arrayStringsAreEqual(["a", "cb"],["ab", "c"])); output(false);
//console.log(arrayStringsAreEqual(["abc", "d", "defg"],["abcddefg"])); output(true)