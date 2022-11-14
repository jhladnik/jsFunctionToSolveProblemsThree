// Functional closures can get overly attached. Set them straight!

// Why doesn't greet_abe() actually greet Abe?

// original code
var name = 'Abe';
var greet_abe = function() {
  return "Hello, " + name + '!';
};
name = 'Ben';
var greet_ben = function() {
  return "Hello, " + name + '!';
};

// revised code
function greet_abe(){
    return `Hello, Abe!`;
}
function greet_ben() {
    return `Hello, Ben!`;
 }