// A sentence is a list of tokens separated by a single space with no leading or trailing spaces. Every token is either a positive number consisting of digits 0-9 with no leading zeros, or a word consisting of lowercase English letters.

// For example, "a puppy has 2 eyes 4 legs" is a sentence with seven tokens: "2" and "4" are numbers and the other tokens such as "puppy" are words.
// Given a string s representing a sentence, you need to check if all the numbers in s are strictly increasing from left to right (i.e., other than the last number, each number is strictly smaller than the number on its right in s).

// Return true if so, or false otherwise.

var areNumbersAscending = function(s) {
    //make the string into an array; filter out the elements containing letters; use map to make the numbered strings into integers; create an empty array to hold differences; loop over the integer array and push any elements that are greater or equal to the next element; if the difference array length is equal to 0, return true, else false
    let arrOfS = s.split(" ");
    let noLetters = arrOfS.filter(el=>el.replace(/[a-z]/g, ""));
    let toNums = noLetters.map(n=>{
        return Number(n);
    });
    let differences = []
    for (let i=0; i<toNums.length; i++){
        if(toNums[i]>=toNums[i+1]){
            differences.push(toNums[i])
        }
    }
    return differences.length!=0 ? false:true
};

//given a string of lowercased letters and numbers as strings that are mixed
//return true if the numbers as strings in the parameter are strictly increasing left to right; return false if they are not
//console.log(areNumbersAscending("1 box has 3 blue 4 red 6 green and 12 yellow marbles"), true);
//console.log(areNumbersAscending("hello world 5 x 5"), false);
//console.log(areNumbersAscending("sunset is at 7 51 pm overnight lows will be in the low 50 and 60 s"), false);