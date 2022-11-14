// ASC Week 1 Challenge 4 (Medium #1)

// Write a function that converts any sentence into a V A P O R W A V E sentence. a V A P O R W A V E sentence converts all the letters into uppercase, and adds 2 spaces between each letter (or special character) to create this V A P O R W A V E effect.

// Note that spaces should be ignored in this case.

// Examples
// "Lets go to the movies"       -->  "L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S"
// "Why isn't my code working?"  -->  "W  H  Y  I  S  N  '  T  M  Y  C  O  D  E  W  O  R  K  I  N  G  ?"

function vaporcode(string) {
    //remove all spaces
    let stringTogether = string.replace(/ /g,"");
    //change to an array, add spaces and change to an uppercase string
    let arrOfStr = stringTogether.split("").join("  ").toUpperCase();
    //return the new string
    return arrOfStr
  }
  
  //given a string
  //return the string with two spaces inbetween each letter, original spaces ommitted; this string must be returned in uppercase
  //input("this is the string"), output("T  H  I  S  I  S  T  H  E  S  T  R  I  N  G")
