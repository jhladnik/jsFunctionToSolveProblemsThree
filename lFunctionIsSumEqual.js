// The letter value of a letter is its position in the alphabet starting from 0 (i.e. 'a' -> 0, 'b' -> 1, 'c' -> 2, etc.).

// The numerical value of some string of lowercase English letters s is the concatenation of the letter values of each letter in s, which is then converted into an integer.

// For example, if s = "acb", we concatenate each letter's letter value, resulting in "021". After converting it, we get 21.
// You are given three strings firstWord, secondWord, and targetWord, each consisting of lowercase English letters 'a' through 'j' inclusive.

// Return true if the summation of the numerical values of firstWord and secondWord equals the numerical value of targetWord, or false otherwise.

var isSumEqual = function(firstWord, secondWord, targetWord) {
    //create a function to do the dirty; function should split to an array, map through the elements and return the charCode-97, change the array of integers to an array of strings and join them "", return this new string as an integer; return true if function(first)+fuction(second)===function(targetWord), else false
    function change(x){
        let arrOfX = x.split("");
        let nums = arrOfX.map(el=>{
            return el.charCodeAt(0)-97;
        });
        let str = nums.map(em=>{
            return em.toString();
        });
        return Number(str.join(""));
    };

    return change(firstWord)+change(secondWord)===change(targetWord) ? true:false

};

//given 3 strings of made up of lowercase letters from "a" to "j" inclusive
//return true if the ascii values of each letter in the first string (making a combined, not summed integer)summed with the same of the second string are equal to the third word with the same conditions on it; else return false
//console.log(isSumEqual("acb", "cba", "cdb"), true);
//console.log(isSumEqual("aaa", "a", "aab"), false);
//console.log(isSumEqual("aaa", "a", "aaaa"), true);