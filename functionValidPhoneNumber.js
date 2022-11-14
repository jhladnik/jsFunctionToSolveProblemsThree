// Write a function that accepts a string, and returns true if it is in the form of a phone number.
// Assume that any integer from 0-9 in any of the spots will produce a valid phone number.

// Only worry about the following format:
// (123) 456-7890 (don't forget the space after the close parentheses)

// Examples:

// "(123) 456-7890"  => true
// "(1111)555 2345"  => false
// "(098) 123 4567"  => false

function validPhoneNumber(phoneNumber){
    //do the splits
    let x = phoneNumber.split("");
    //see if the splits fit into the template for the phone number
    let y = ["(",`${x[1]}`,`${x[2]}`,`${x[3]}`,")"," ",`${x[6]}`,`${x[7]}`,`${x[8]}`,"-",`${x[10]}`,`${x[11]}`,`${x[12]}`,`${x[13]}`];
    //straighted up the template to make it look normal
    let z = y.join("");
    //do they match
    if (z===phoneNumber){
      //you got yourself a phone number
      return true;
    }else{
      //you were duped
      return false;
    }  
}
  
//given a string of numbers and characters; a phone number should be "(xxx) xxx-xxxx"
//return true if the string given is in the correct phone number format; return false if it is not
//input("(345) 678-9012"), output(true); input("098-765-4321"), output(false)