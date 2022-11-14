// Nickname Generator

// Write a function, nicknameGenerator that takes a string name as an argument and returns the first 3 or 4 letters as a nickname.

// If the 3rd letter is a consonant, return the first 3 letters.

// nickname("Robert") //=> "Rob"
// nickname("Kimberly") //=> "Kim"
// nickname("Samantha") //=> "Sam"
// If the 3rd letter is a vowel, return the first 4 letters.

// nickname("Jeannie") //=> "Jean"
// nickname("Douglas") //=> "Doug"
// nickname("Gregory") //=> "Greg"
// If the string is less than 4 characters, return "Error: Name too short".

// Notes:

// Vowels are "aeiou", so discount the letter "y".
// Input will always be a string.
// Input will always have the first letter capitalised and the rest lowercase (e.g. Sam).
// The input can be modified

function nicknameGenerator(name){
    //create a conditional to make the rules outlined, apply
    if(name.length<4){
      //if the name is less than 4 letters, warning Dr. Smith
      return "Error: Name too short"
    //if the 3rd letter in the name is a vowel, make the nickname 4 letters
    }else if(name.charAt(2)=='a' || name.charAt(2)=='e' || name.charAt(2)=='i' || name.charAt(2)=='o' || name.charAt(2)=='u'){
      return name.charAt(0)+name.charAt(1)+name.charAt(2)+name.charAt(3)
    }else{
      //or else we have a plain old 3 letter nickname
      return name.charAt(0)+name.charAt(1)+name.charAt(2)
    }
}
  
//given a string with the first letter capitalized and the rest lowercase
//return a nickname for each name; nickname is equal to the first 3 letters of the given string if the 3rd letter
//is not a vowel(y is not included); if the 3rd letter is a vowel, the nickname will be the first 4 letters of the string; if the given
//string is less than 4 letters, return "Error: Name too short"
//input("Timothy"), output("Tim"); input("Joe"), output("Error: Name too short"); input("Grace"), output("Grac")