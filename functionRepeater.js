// Write a function named repeater() that takes two arguments (a string and a number), and returns a new string where the input string is repeated that many times.

// Example: (Input1, Input2 --> Output)
// "a", 5 --> "aaaaa"

function repeater(string, n){
    //create an empty array to hold our strings
    let strHolder = [];
    //whats a looper
    for(let i=0; i<n; i++){
      //send the string to the new array n times
      strHolder.push(string);
    }
    //return the string using the join method on the array
    return strHolder.join("")
}
  
//given a string and a number (n)
//return the string repeated n number of times in a new string
//input("This", 2), output("ThisThis"); input("abc",6), output("abcabcabcabcabcabc")