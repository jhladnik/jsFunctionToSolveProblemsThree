// A string is good if there are no repeated characters.

// Given a string s​​​​​, return the number of good substrings of length three in s​​​​​​.

// Note that if there are multiple occurrences of the same substring, every occurrence should be counted.

// A substring is a contiguous sequence of characters in a string.

var countGoodSubstrings = function(s) {
    // create a counter (counter) to sum our occurences of good strings; split s into an array of substrings (arrOfS); loop through arrOfS starting at 2 index and if the element is not the same as i-2, i-1, and i-1 !== i-2, add 1 to counter; return counter
    let counter = 0;

    let arrOfS = s.split("");

    for (let i=2; i<arrOfS.length; i++) {
        if (arrOfS[i] !== arrOfS[i-2] && arrOfS[i] !== arrOfS[i-1] && arrOfS[i-1] !== arrOfS[i-2]) {
            counter += 1
        }
    }
    
    return counter
};

// Given a string (s); given the definition of a good string being a string that has no repeated characters
// return the number of good substrings that have a length of 3 in s
// console.log(countGoodSubstrings("xyzzaz"), 1);
// console.log(countGoodSubstrings("aababcabc"), 4);