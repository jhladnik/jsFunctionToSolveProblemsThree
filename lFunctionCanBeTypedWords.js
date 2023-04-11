// There is a malfunctioning keyboard where some letter keys do not work. All other keys on the keyboard work properly.

// Given a string text of words separated by a single space (no leading or trailing spaces) and a string brokenLetters of all distinct letter keys that are broken, return the number of words in text you can fully type using this keyboard.

var canBeTypedWords = function(text, brokenLetters) {
    //split text into an array of strings; create an empty array to hold some words; loop through text array; nest a loop  of brokenLetters; see if any of the array elements contain the letter, if they do push to the created array; find the difference between the text array and the newly created array (without any duplicates) and return
    let arrOfText = text.split(" ");
    let words = [];

    for(let i=0; i<arrOfText.length; i++){
        for(let j=0; j<brokenLetters.length; j++){
            if(arrOfText[i].includes(brokenLetters[j])){
                words.push(arrOfText[i]);
            };
        };
    };
    return arrOfText.length-[...new Set(words)].length;
};

//given a string of words (text); multiple words in the string will be separated by a single space; given a string of letters (brokenLetters)
//return the number of substrings in text that can be typed correctly without the brokenLetters
//console.log(canBeTypedWords("hello world", "ad"), 1);
//console.log(canBeTypedWords("leet code", "lt"), 1);
//console.log(canBeTypedWords("leet code", "e"), 0);