// Given an integer n, return a string with n characters such that each character in such string occurs an odd number of times.

// The returned string must contain only lowercase English letters. If there are multiples valid strings, return any of them.  

var generateTheString = function(n) {
    //create a varable to find a random letter; use a conditional to check the parameter (n) if it is odd or not, if odd, print random letter (n) times; if it is even, subtract 1 from n (m), print 1st letter m times, print 2nd letter 1 time; return result
    let getLetter = String.fromCharCode(Math.floor(Math.random()*26)+97);
    if(n%2!==0){
       return getLetter.repeat(n);
    }else{
        let minusOne = getLetter.repeat(n-1);
        let nextLet = String.fromCharCode(Math.floor(Math.random()*26)+97);
        return minusOne+nextLet
    }
};

//given an integer
//return a string of lowercase letters that can only be of odd quantity
//console.log(generateTheString(4), "(letter1)(letter1)(letter1)(letter2)");
//console.log(generateTheString(2), "(letter1)(letter2)");
//console.log(generateTheString(7), "(letter1)(letter1)(letter1)(letter1)(letter1)(letter1)(letter1)");