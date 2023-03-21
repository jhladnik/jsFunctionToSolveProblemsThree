// How can you tell an extrovert from an introvert at NSA?
// Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.

// I found this joke on USENET, but the punchline is scrambled. Maybe you can decipher it?
// According to Wikipedia, ROT13 is frequently used to obfuscate jokes on USENET.

// For this task you're only supposed to substitute characters. Not spaces, punctuation, numbers, etc.

function rot13(str) {
    //create an variable for the changing of the letter to ROT13; create an empty string to hold
    //the new string; loop through the given string and use a conditional to implement the switch or not;
    //return the new string
    let result = "";
    for (let i = 0; i < str.length; i++) {
      let charCode = str.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        result += String.fromCharCode((charCode - 65 + 13) % 26 + 65);
      } else if (charCode >= 97 && charCode <= 122) {
        result += String.fromCharCode((charCode - 97 + 13) % 26 + 97);
      } else {
        result += str.charAt(i);
      }
    }
    return result;
}

//given a string of letters, numbers as strings, and symbols; given the deciphering method of ROT13
//return the string after it has been decoded; only change the letters in the string, no numbers or symbols
//console.log(rot13("EBG13 rknzcyr."), "ROT13 example.");
//console.log(rot13("This is my first ROT13 excercise!"), "Guvf vf zl svefg EBG13 rkprepvfr!");