// Create a method sayHello/say_hello/SayHello that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

// Example:

// sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')
// This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!

function sayHello( name, city, state ) {
    //remove name from an array and place in to string and separate with a space
    let stringyName = name.join(" ");
    //return phrase with parameters
    return `Hello, ${stringyName}! Welcome to ${city}, ${state}!`
  }
  
  //given "name" as an array, city, and state
  //return "Hello, (name)! Welcome to (city), (state)!"
  //input(['John', 'Doe'], 'Baltimore', 'Maryland') output('Hello, John Doe! Welcome to Baltimore, Maryland!')