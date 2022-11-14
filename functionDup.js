// In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

// For example:

// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

// dup(["kelless","keenness"]) = ["keles","kenes"].

// Strings will be lowercase only, no spaces. See test cases for more examples.

function dup(s) {
    return s.map(el => [...el].reduce((newStr, letter) => (newStr += [...newStr].pop() !== letter ? letter : ''), ''))
}
//given an array of strings; all strings will be lowercase; there will be no spaces
//return the array with the strings, only any repeating letters in the strings need to be removed, leaving only one of the
//specific letters
//input(['tthhee', 'aarrrraayy']), output(['the', 'aray'])