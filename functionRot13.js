// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

function rot13(message){
    //whats the alphabet in lowercase and uppercase
    let drink = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    //what is a+13 in the alphabet looped in lowercase and uppercase
    let ovaltine = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM";
    //return the message replacing the given message letters with "your" which is the letter of ovaltine at the corresponding index of message's letter in drink
    return message.replace(/[a-z]/gi, your => ovaltine[drink.indexOf(your)])
}
  
//given a string of letters and characters; upper and lower cased
//return a string; every letter should be returned as the letter that comes 13 letters after it;
//every character other than letters should remain the same; uppercase letters should return upper-
//cased letters, and lowercased letters should return lowercased letters
//input("Abcdefg"), output("Nopqrst"); input("A string"), output("N fgevat")