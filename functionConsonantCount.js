// Complete the function that takes a string of English-language text and returns the number of consonants in the string.

// Consonants are all letters used to write English excluding the vowels a, e, i, o, u.

function consonantCount(str) {
    //change the string to an array removing spacing; change the string to all lowercase; remove all symbols with replace method;
    //then remove all vowels with the replace method; return the count of the new string
    let lowerNoSpace = str.toLowerCase().split(" ").join("");
    let noSym = lowerNoSpace.replace(/[^a-z]/g, "").replace(/[aeiou]/g, "");
    return noSym.length
}

//given a string of text; can be made up of symbols, numbers, letters, uppercase and lowercase
//return how many consonants are in the given string
//console.log(consonantCount('aaaaa'), 0;
//console.log(consonantCount(''), 0);
//console.log(consonantCount('h^$&^#$&^elLo world'), 7);