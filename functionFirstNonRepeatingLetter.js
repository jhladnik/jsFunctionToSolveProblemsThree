// Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

function firstNonRepeatingLetter(s) {
    //change the string to all lowercased then into an array; loop through the new array and if the index of the
    //letter is the same as the last index of the letter, return the original strings indexed letter; else return
    //an empty string
    let arrOfS = s.toLowerCase().split("");
    
    for(let i=0; i<arrOfS.length; i++){
      if(arrOfS.indexOf(arrOfS[i])===arrOfS.lastIndexOf(arrOfS[i])){
        return s[i]
      }
    };
    return '';
}

//given a string of letters; letters can be both uppercase and lowercase
//return the first letter to be a unique letter in the word; return the letter in the case that it was
//provided in the parameter; if all letters occur more than one time, return an empty string
//console.log(s('a'), 'a');
//console.log(s('stress'), 't');
//console.log(s('moonmen'), 'e');