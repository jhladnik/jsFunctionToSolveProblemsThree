// var uniqueMorseRepresentations = function(words) {
//     //create a variable for the alphabet that we are given; create an empty array to hold our strings once we convert them to Morse Code; loop over the array that we are given, inside the loop create another empty array to hold individual letters changed to Morse Code; create a nested loop to separate the letters of the original arrays elements, change them to Morse Code using ASCII chart and push to empty inner array; join the strings in the inner array and push to first created empty array; create a new set off of the first created array, return the length
//     const morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];

//     let wordHolder = [];

//     for (let word of words){
//         let letters = [];
//         for (let i=0; i<word.length; i++){
//             letters.push(morse[word[i].charCodeAt(0)-97])
//         }
//         let joinedLetters = letters.join("");
//         wordHolder.push(joinedLetters)
//     }
//     let set = [...new Set(wordHolder)]
//     return set.length
// };

var uniqueMorseRepresentations = function(words) {
    //create a variable for the alphabet we are given; create a function that will take an element, split to an array, map it to Morse Code, then join together as a single string; then create a new Set, loop over the given array, in the loop, create a variable for running the created function over the individual element of the given array, use add method to make sure we are only adding originals to the set; return the length of the new set
    const morseArr =[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];


    function getMorseCode(word){
        return [...word].map(w=>{
            const wMorseIndex = w.charCodeAt() - 97
            return morseArr[wMorseIndex]
        }).join('')
    }

    const uniqueSet = new Set()
    for(let i = 0; i < words.length; i++){
      const morseCode = getMorseCode(words[i])
      uniqueSet.add(morseCode)
    }

    return [...uniqueSet].length
};



//given the English alphabet in Morse Code and an array of strings
//return the number of unique combinations of Morse Code that are contained when the strings are converted to Morse Code
//console.log(uniqueMorseRepresentations(["gin","zen","gig","msg"]), 2);
//console.log(uniqueMorseRepresentations(["a"]), 1);