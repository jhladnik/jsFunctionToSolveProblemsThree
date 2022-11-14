// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(x){
    //create an array to hold some values
    let vOfW = [];
    //split up the string into separate words
    let splitOfX = x.split(" ");
    //lets make a loop here
    for (let splits of splitOfX){
      //split up the splits
      let sOfS = splits.split("");
      //make an array to hold the values of the letters
      let valOfLet = [];
      //looper
      for (let letters of sOfS){
        //push the value of the letter using the ASCII -96 to get the proper values
        valOfLet.push(letters.charCodeAt()-96)
      }
      //add the letters together now and shove them into the empty array we first made
      let sumOfL = valOfLet.reduce((acc,c)=>acc+c,0);
      vOfW.push(sumOfL);
    }
    //lets find the index of the largest sum now
    let decks = vOfW.indexOf(Math.max(...vOfW));
    //return the word from the index we found
    return splitOfX[decks].toString();
}
  
//given a string of words; each letter is given a score depending on its place in the alphabet: a:1, b:2, c:3...
//when the letters of each word are summed, return the word with the highest score; if there are two words with the same score,
//return the word that comes first in the string
//input("this is not easy"), output("this"); input("a string"), output("string")