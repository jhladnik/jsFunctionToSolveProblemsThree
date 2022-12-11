// You own a Goal Parser that can interpret a string command. The command consists of an alphabet of "G", "()" and/or "(al)" in some order. The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al". The interpreted strings are then concatenated in the original order.

// Given the string command, return the Goal Parser's interpretation of command.

var interpret = function(command) {
    //use the replaceAll method to replace "(al)" with "al" and replace "()" with "o"
    let patternOne = "()";
    let patternTwo = "(al)";
    return command.replaceAll( patternOne, "o").replaceAll(patternTwo, "al");
};

//given a string of letters and symbols, consisting of "G", "()", and "(al)"; "()" should be replaced with "o", "(al)" should be replaced with "al"
//return the decoded string with the replacements in place
//console.log(interpret("G()(al)"), "Goal");
//console.log(interpret("G()()()()(al)"), "Gooooal");
//console.log(interpret("(al)G(al)()()G"), "alGalooG");