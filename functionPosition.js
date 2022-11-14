// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"

function position(letter){
    //create an array with all of the letters of the alphabet for reference
    const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
    //return the phrase + the position of the letter in the alphabet
    return `Position of alphabet: ${alphabetArray.indexOf(letter)+1}`
  }
  
  //given letter, a letter in the alphabet
  //return "Position of alphabet:" + the numeric position of the letter
  //input(b) output("Position of alphabet: 2"); input(z) output("Position of alphabet: 26")