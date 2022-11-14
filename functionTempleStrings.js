// Template Strings
// Template Strings, this kata is mainly aimed at the new JS ES6 Update introducing Template Strings
// Task
// Your task is to return the correct string using the Template String Feature.
// Input
// Two Strings, no validation is needed.
// Output
// You must output a string containing the two strings with the word ```' are '```

var TempleStrings = function(obj, feature) {
    //use the template literal for this one, inserting the two strings
    return `${obj} are ${feature}`
}
  
//given two strings
//return the two strings to be joined as one with the word "are"
//input("Roses","red"), output("Roses are red"); input("Violets","blue"), output("Violets are blue"); input("Daisies", "white"), output("Daisies are white")