// In this exercise, a string is passed to a method and a new string has to be returned with the first character of each word in the string.

// For example:

// "This Is A Test" ==> "TIAT"
// Strings will only contain letters and spaces, with exactly 1 space between words, and no leading/trailing spaces.

function makeString(s){
    //create an array to hold the first letters of the string
    let letterHold = [];
    //change the string into an array
    let arrOfS = s.split(" ");
    //loop over the words
    for(let words of arrOfS){
      //split up the words
      let wordArr = words.split("");
      //push the first index
      letterHold.push(wordArr[0]);
    }
    //return the new array after it has been changed into a string
    return letterHold.join("")
}

//given a string of words
//return a string that consists of the first letter of each word, together
//input('this is a string'), output('tias'); input('Lets Try This One'), output('LTTO')
  