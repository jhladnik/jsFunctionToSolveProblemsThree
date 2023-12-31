var findWordsContaining = function(words, x) {
    //create an empty array (gotIt); loop through words; in the string, replace x with nothing; use a conditional to see if the new length of the string is the same as the old; if not, push the index to gotIt; return gotIt

    const gotIt = [];

    for (let i=0; i<words.length; i++) {
        let revised = words[i].replace(x,"").length;
        if (revised !== words[i].length) {
            gotIt.push(i);
        }
    };

    return gotIt

};

//Given an array containing strings (words) and a single string which is a character (x)
//return an array of indices that represent the strings inside of words which contain x; if none of the elements inside of words contain x, return an empty array
//console.log(findWordsContaining(["leet","code"], "e"), [0,1]);
//console.log(findWordsContaining(["abc","bcd","aaaa","cbc"], "a"), [0,2]);
//console.log(findWordsContaining(["abc","bcd","aaaa","cbc"], "z"), []);