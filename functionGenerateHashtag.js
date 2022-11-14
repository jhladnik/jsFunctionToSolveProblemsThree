// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

function generateHashtag (str) {
    //create an array of the string
    let toSlick = str.split(" ");
    //create a loop to separate the elements
    for (let twine of toSlick){
      //create a conditional to find if the individual elements are empty or not
      if (twine.length<1){
        return false
      }else{
        //capitaliza all the first letters of the words
        toSlick.forEach(function(word, i) {
        toSlick[i] = word.charAt(0).toUpperCase() + word.substring(1);
        })
        //add the hashtag to the string
        toSlick.unshift("#");
        //change the array back in to a string
        let toSlickStr = toSlick.join("")
        //check if the string is now longer than the upper limit and return false if it is; if not, return the string
        if(toSlickStr.length>140){
          return false
        }else{
          return toSlickStr
        }
      }
    }
  }
  
  
  //given a string of words or an emopty string
  //return the string with a # at the beginning, with every word capitalized, and no spaces in the returned string; if the returned string is greater than 140 characters long, return false; if the given string is empty, return false
  //input("This is the string"), output("#ThisIsTheString"); input("Let us try another"), output("#LetUsTryAnother"); input(""), output(false)