// Given a sentence that consists of some words separated by a single space, and a searchWord, check if searchWord is a prefix of any word in sentence.

// Return the index of the word in sentence (1-indexed) where searchWord is a prefix of this word. If searchWord is a prefix of more than one word, return the index of the first word (minimum index). If there is no such word return -1.

// A prefix of a string s is any leading contiguous substring of s.

var isPrefixOfWord = function(sentence, searchWord) {
    //change sentence into an array; loop through sentence array; use a conditional to see if searchWord[0] is the same as arrOfSent[i][0], if it is, change the element into an array, slice the beginning of the new array to length of seachWord and join to it's own string; use a conditional to see if the new string is the same as searchWord, if it is, return i+1; return -1
    let arrOfSent = sentence.split(" ");

    for(let i=0; i<arrOfSent.length; i++){
        if(arrOfSent[i][0]===searchWord[0]){
            let word = arrOfSent[i].split("");
            let cut = word.slice(0,searchWord.length).join("");
            if(cut===searchWord){
                return i+1
            }
        };
    };
    return -1
};

//given a sentence or string of words separated by a space (sentence); given a string (searchWord)
//return the lowest indexed string's index in sentence that begins with searchWord; if no word begins with searchWord, return -1
//console.log(isPrefixOfWord("i love eating burger", "burg"), 4);
//console.log(isPrefixOfWord("this problem is an easy problem", "pro"), 2);
//console.log(isPrefixOfWord("i am tired", "you"), -1);