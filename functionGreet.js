// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Example:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"

var greet = function(name) {
    //make the entire name lowercase and split up the letters
    let splitTheName = name.toLowerCase().split("");
    //make the first element in the array uppercase
    let capitalLetter = splitTheName[0].toUpperCase();
    //split off the rest of the name
    let dice = splitTheName.slice(1);
    //get that capital into the front now
    dice.unshift(capitalLetter);
    //we need to make the name a string again
    let diceStr = dice.join("")
    //and FINALLY return the phrase
    return `Hello ${diceStr}!`
};
  
//given a name, can be uppercase, lowercase, any case
//return the phrase "Hello (name here)!" with the first letter of the name being
//capitalized and an exclamation point after the name
//input(ivan), output("Hello Ivan!"); input(PAUL), output("Hello Paul!")