// Modify the spacify function so that it returns the given string with spaces inserted between each character.

// spacify("hello world") // returns "h e l l o   w o r l d"

function spacify(str) {
    //create spaces by splitting up the string into an array and joining the elements back together with .join, creating a string 
    let spacedOut = str.split("").join(" ");
    //return the new string
    return spacedOut
 }
  
 //given a string of characters
 //return a string with an extra space between all characters
 //input("this is a string"), output("t h i s   i s   a   s t r i n g"); input("What?"), output("W h a t ?")