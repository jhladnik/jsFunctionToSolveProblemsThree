// You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:

// As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

function reverse(string){
    //take string and split words, then reverse the order, then join the words back
    return string.split(" ").reverse().join(" ")
  }
  
  //given a string of words
  //return the string with the words in reverse order, so that the letters are the same in the words, just words reversed
  //input("Hi Joe!") output("Joe! Hi"); input("This is pretty fun.") Output("fun. pretty is This")