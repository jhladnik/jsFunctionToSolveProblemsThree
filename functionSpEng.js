// Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".

// The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.

// Upper or lower case letter does not matter -- "eNglisH" is also correct.

// Return value as boolean values, true for the string to contains "English", false for it does not.

function spEng(sentence){
    //change the string over to lowercase
    let smallSentence = sentence.toLowerCase();
    //check if the sentence contains the appropriate string combo
    if (smallSentence.includes('english')){
      return true
    }else{
      return false
    }
  }
  
  //given a string "sentence" of different ascii characters
  //return true if the "sentence" contains the combination "english" in upper or lower case, and false if it does not
  //input("lhlihlifwedengLishigkb") output(true); input("gihglacwee") output(false)