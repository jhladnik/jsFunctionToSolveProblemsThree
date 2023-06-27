// We define the usage of capitals in a word to be right when one of the following cases holds:

// All letters in this word are capitals, like "USA".
// All letters in this word are not capitals, like "leetcode".
// Only the first letter in this word is capital, like "Google".
// Given a string word, return true if the usage of capitals in it is right.


var detectCapitalUse = function(word) {
    //create a variable for all letters other than the first letter in a string (cut); use a conditional to see if all letters are uppercase or lowercase, if so, return true; else if the first letter in the string is uppercase and cut is lowercase, return true; else false
    let arrOfWord = word.split("");
    let cut = word.slice(1);

    if(word.toUpperCase() === word || word.toLowerCase() === word){
        return true;
    }else if(arrOfWord[0].toUpperCase() === arrOfWord[0] && cut.toLowerCase() === cut){
        return true;
    }else{
        return false;
    }
};

//given a string; given the info that proper use of capitals is having all substrings uppercase, all substrings lowercase, or the first substring uppercase and the rest lowercase
//return true if proper use of capitals is being used, else false
//console.log(detectCapitalUse("USA"), true);
//console.log(detectCapitalUse("Google"), true);
//console.log(detectCapitalUse("lowercase"), true);
//console.log(detectCapitalUse("FlaG"), false);