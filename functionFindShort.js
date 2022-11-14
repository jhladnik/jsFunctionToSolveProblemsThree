// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s){
    //split the string in to an array
    let arrayOfWords = s.split(" ");
    //use the reduce method to get through the array and use boolean to turn up the shortest element
    let shortestWord = arrayOfWords.reduce((long, short)=> {return long.length<short.length ? long:short}, arrayOfWords[0]);
    return shortestWord.length
  }
  
  
  //given a string of words, string should never be empty and should only be words (s)
  //return the length of the shortest word in the string
  //input("This is a javascript party") output(1); input("Ain't no party like a javascript party because the javascript party don't stop") output(1)