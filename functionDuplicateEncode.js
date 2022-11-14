// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

function duplicateEncode(word){
    //ignore case
    let allOne = word.toLowerCase();
    //create a new string to hold the new symbols
    let parens = ''
    //create a loop to iterate through the word
    for (let i=0; i<allOne.length; i++){
      //if there is more than one index of the letter, add ")"
      if(allOne.lastIndexOf(allOne[i])!==allOne.indexOf(allOne[i])){
        parens += ")"
      }else{
        parens += "("
      }
    }
    return parens
}

//given a string of letters; can be uppercase and lowercase
//return a string of parentheses where if a letter (case ignored) occurs
//more than one time, a ")" is substituted, and if a letter only occurs one
//time, a "(" is substituted
//input("recede"), output("()()()"); input("Success"), output(")())())")
  
