// Complete the function that counts the number of unique consonants in a string (made up of printable ascii characters).

// Consonants are letters used in English other than "a", "e", "i", "o", "u".

// Remember, your function needs to return the number of unique consonants - disregarding duplicates. For example, if the string passed into the function reads "add", the function should return 1 rather than 2, since "d" is a duplicate.

// Similarly, the function should also disregard duplicate consonants of differing cases. For example, "Dad" passed into the function should return 1 as "d" and "D" are duplicates.

function countConsonants(str) {
    //make everything lowercase; remove all spacing; remove all vowels and symbols; remove dupes; return amount
    let lowerNoSpace = str.toLowerCase().split(" ").join("");
    let noSymVowel = lowerNoSpace.replace(/[^a-z]/g, "").replace(/[aeiou]/g, "");
    let arrOfNoSymVowel = noSymVowel.split("");
    return [...new Set(arrOfNoSymVowel)].length
    //OR
    //return new Set(str.toLowerCase().replace(/[^a-z]|[aeiou]/g, "")).size
}

//given a string consisting of letters, numbers, symbols
//return the amount of unique consonants the string contains
//console.log(countConsonants(''), 0);
//console.log(countConsonants('Dad'), 1);
//console.log(countConsonants('sillystring'), 7);
//console.log(countConsonants(Count my unique consonants!!), 7);