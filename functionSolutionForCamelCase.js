// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// complete the function
function solution(string) {
    let arabian = string.split(/(?=[A-Z])/);
    return arabian.join(" ")
  }
  
  //given a string of words either in camelCase, lowercase, or empty
  //return the camelCase string with a space added between the last lowercase and first uppercase word; if the string is all lowercase, return the lowercase word; if the string is empty, return an empty string
  //input("camelCase"), output("camel Case"); input("lowercase"), output("lowercase"); input(''), output('')
  