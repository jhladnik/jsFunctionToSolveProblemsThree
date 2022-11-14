// Given two words and a letter, return a single word that's a combination of both words, merged at the point where the given letter first appears in each word. The returned word should have the beginning of the first word and the ending of the second, with the dividing letter in the middle. You can assume both words will contain the dividing letter.

// Examples
// ("hello", "world", "l")       ==>  "held"
// ("coding", "anywhere", "n")   ==>  "codinywhere"
// ("jason", "samson", "s")      ==>  "jasamson"
// ("wonderful", "people", "e")  ==>  "wondeople"

function stringMerge(string1, string2, letter){
    //change the first string to an array
    let arrOfStr1 = string1.split("");
    //change the second string to an array
    let arrOfStr2 = string2.split("");
    //slice off the rest of the array after and including the letter
    let partOf1 = arrOfStr1.slice(0, arrOfStr1.indexOf(letter));
    //slice off the rest of the array starting at the letter
    let partOf2 = arrOfStr2.slice(arrOfStr2.indexOf(letter));
    //concatenate the two slices
    let final = partOf1.concat(partOf2);
    //join them and return
    return final.join("")
}