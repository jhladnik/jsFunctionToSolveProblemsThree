// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

function duplicateCount(text){
    //make the text into all lowercase; create an empty array; loop over the lowered string; use a conditional to see if
    //the index of i is not the same as the last index of i, if they aren't the same, push the character to the empty array;
    //return the length of a new Set of the created array
    let lowered = text.toLowerCase()
    let dupes = []
    
    for(let i=0; i<=lowered.length; i++){
      if(lowered.indexOf(lowered[i])!==lowered.lastIndexOf(lowered[i])){
        dupes.push(lowered[i])
      }
    }
    return [...new Set(dupes)].length
}

//given a string of uppercase and lowercase characters as well as numbers as strings
//return the number of characters (case insensitive) or numbers as strings that occur more than once in the string
//console.log(duplicateCount("abcde"), 0);
//console.log(duplicateCount(""), 0);
//console.log(duplicateCount("aabBcde"), 2);
//console.log(duplicateCount("Indivisibilities"), 2);