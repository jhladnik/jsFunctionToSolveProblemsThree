// Write a program to determine if a string contains only unique characters. Return true if it does and false otherwise.

// The string may contain any of the 128 ASCII characters. Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.

function hasUniqueChars(str){
    //change the string into an array
    let arrOfStr = str.split("");
    //create a Set
    let setOfArr = [...new Set(arrOfStr)];
    //create a conditional to find if the lengths of the arrays are the same or not
    return arrOfStr.length==setOfArr.length ? true:false
}

//given a string of ASCII characters, containing both uppercase and lowercase
//return "true" if the string contains only unique characters; return false if otherwise
//input('abcdefg'), output(true); input('aabcdef'), output(false); input('Aa'), output(true)