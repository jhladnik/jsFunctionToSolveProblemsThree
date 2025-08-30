// You are given a string s. The score of a string is defined as the sum of the absolute difference between the ASCII values of adjacent characters.

// Return the score of s.

var scoreOfString = function(s) {
    // create an array to hold the differences of the substrings
    const diff = [];

    // Separate the string into substrings in an array
    const arrOfS = s.split("");

    // Loop through arrOfS finding the difference between each element and the next, push absolute difference to diff
    for (let i=0; i<arrOfS.length-1; i++) {
        let charDiff = arrOfS[i].charCodeAt(0) - arrOfS[i+1].charCodeAt(0);
        diff.push(Math.abs(charDiff))
    }

    // Sum diff
    let sum = diff.reduce((acc,c) => acc+c, 0);

    // return sum
    return sum
};

// Given an string (s); given the definition of the score of a string being the ASCII value of the string element minus the next element in the string, summed to find one valaue
// Return the score of s as an integer
// console.log(scoreOfString("hello"), 13);
// console.log(scoreOfString("zaz"), 50);