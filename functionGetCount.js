// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    //replace all the vowels in the string and check the length difference of the
    //original and the new string
    let noVowel = str.replace(/[aeiou]/gi,'');
    return str.length-noVowel.length
}

//given a string of letters that are only lowercase as well as spaces
//return the count of vowels (not y) that are included in the string
//input('a,e,i,o,u'), output(5);
//input('This is my string'), output(3);
//input(' '), output(0);