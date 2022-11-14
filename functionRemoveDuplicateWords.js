// our task is to remove all duplicate words from a string, leaving only single (first) words entries.

// Example:

// Input:

// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

// Output:

// 'alpha beta gamma delta'

function removeDuplicateWords (s) {
    //change the string to an array
    let arrayOfString = s.split(" ");
    //pull all duplicates from the string and create a new array with the originals
    let originalWords = [...new Set(arrayOfString)];
    //change the array to a string and return it
    return originalWords.join(" ")
  }
  
  //given a string of words
  //return the string with any duplicates removed from the string
  //input("yes yes no no") output("yes no"); input("one two three four two one") output("three four")