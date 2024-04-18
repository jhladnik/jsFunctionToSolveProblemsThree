// Given an array of strings words and a character separator, split each string in words by separator.

// Return an array of strings containing the new strings formed after the splits, excluding empty strings.

// Notes:

// separator is used to determine where the split should occur, but it is not included as part of the resulting strings.
// A split may result in more than two strings.
// The resulting strings must maintain the same order as they were initially given.

var splitWordsBySeparator = function(words, separator) {
    // create an empty array to hold the subs we create when splitting
    let arr = [];

    // loop through words
    for (let i=0; i<words.length; i++) {
        // split i into multiple strings by the separator
        let elArr = words[i].split(separator);
        // send to arr
        arr.push(elArr);
    }

    // remove all subarrays and create one array
    let noSub = arr.flat();

    // return the new array after filtering out the empty strings
    return noSub.filter(el => el!=="");

};

// given an array of strings (words) and given a character (separator)
// return an array which consists of the strings of words that have been separated at separator
// console.log(splitWordsBySeparator(["one.two.three","four.five","six"], "."); ["one","two","three","four","five","six"]);
// console.log(splitWordsBySeparator(["$easy$","$problem$"], "$"); ["easy","problem"]);
// console.log(splitWordsBySeparator(["|||"], "|"); []);