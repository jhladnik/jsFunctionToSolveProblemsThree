// Given a string s consisting of only the characters 'a' and 'b', return true if every 'a' appears before every 'b' in the string. Otherwise, return false.

var checkString = function(s) {
    //change the string to an array of strings; sort the array and change back to a string; use a conditional to see if the new sorted string is the same as the original; return true if it is, false if it is not
    let arrOfS = s.split("");
    let order = arrOfS.sort();
    let sOfOrder = order.join("");

    return s==sOfOrder ? true:false
};

//given a string consisting of only the characters 'a' and 'b'
//return true if every 'a' in the string appears before every 'b'; return false if every 'a' does not appear before every 'b'
//console.log(checkString("aaabbb"), true);
//console.log(checkString("abab"), false);
//console.log(checkString("bbb"), true);