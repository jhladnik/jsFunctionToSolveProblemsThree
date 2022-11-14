// An AI has infected a text with a character!!

// This text is now fully mutated to this character.

// If the text or the character are empty, return an empty string.
// There will never be a case when both are empty as nothing is going on!!

// Note: The character is a string of length 1 or an empty string.

// Example
// text before = "abc"
// character   = "z"
// text after  = "zzz"

function contamination(text, char){
    //create an empty array
    let arrOfNew = [];
    //find the length of the text
    let lengOfTxt = text.length
    //push the new character into the array
    arrOfNew.push(char);
    //make the array a string and repeat it the length of the original text...return that
    return arrOfNew.join("").repeat(lengOfTxt)
  }
  
  //given a text string and a character
  //return a string where all of the characters in the original string are changed to the character given; an empty string should produce an empty string
  //input("try this", "q"), output("qqq qqqq"); input("What about this one?","P"), output("PPPP PPPPP PPPP PPPP")