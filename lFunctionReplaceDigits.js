// You are given a 0-indexed string s that has lowercase English letters in its even indices and digits in its odd indices.

// There is a function shift(c, x), where c is a character and x is a digit, that returns the xth character after c.

// For example, shift('a', 5) = 'f' and shift('x', 0) = 'x'.
// For every odd index i, you want to replace the digit s[i] with shift(s[i-1], s[i]).

// Return s after replacing all digits. It is guaranteed that shift(s[i-1], s[i]) will never exceed 'z'.

var replaceDigits = function(s) {
    //create an empty array; change the string into an array; loop through the new array; find the odd indices, and replace them with the function provided and push to new array; change the array to a string; return the new string
    
    let noDijies = [];
    let arrOfS = s.split("");

    for (let i=0; i<arrOfS.length; i++){
        if(i%2!==0){
           const shift = Number(arrOfS[i-1].charCodeAt(0)) + Number(arrOfS[i]);
           noDijies.push(String.fromCharCode(shift))
        }else{
            noDijies.push(arrOfS[i])
        }
    }
    return noDijies.join("")
};

//given a string of lowercased letters (even indices) and integers (odd indices); function shift(c, x) has already been created where c is a character and x is a digit, this returns the xth character after c
//return a string where for every odd index (integer) it is replaceed with the shift(s[i-1], s[i])
//console.log(replaceDigits("a1c1e1"), "abcdef");
//console.log(replaceDigits("a1b2c3d4e"), "abbdcfdhe");