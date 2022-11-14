// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes 

String.prototype.toJadenCase = function () {
    //separate words and place them in an array
    let jadensArray = this.split(" ")
    //create loop to capitalize every first word
    for (let i = 0; i<jadensArray.length; i++){
      jadensArray[i] = jadensArray[i][0].toUpperCase()+jadensArray[i].substr(1)
      }
     //return string with .join
    return jadensArray.join(" ")
  };
  
  //given a string of Jaden's words
  //return a string with the first letter of every word capitalized
  //input("Is this really going to work") output("Is This Really Going To Work"); input("I am doing well") output("I Am Doing Well")