// He needs you to create a method that can determine how many letters (both uppercase and lowercase ASCII letters) and digits are in a given string.

// Example:

// "hel2!lo" --> 6

// "wicked .. !" --> 6

// "!?..A" --> 1

function countLettersAndDigits(input) {
    //remove all of the characters that are letters (uppercase and lowercase), and numbers
    let noLet = input.replace(/[a-z0123456789]/gi,'');
    //return the original input length minus the new string length
    return input.length-noLet.length
}

//given a string of mixed numbers, letters, and symbols; both uppercase and lowercase
//return the length of the new string if everything other than letters and 
//numbers has been removed
//input('12fuyfvi$%'), output(8); input('&!$'), output(0)