// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {
    //split the strings and form into a singular array
    let firstArray=s1.split("");
    let secondArray=s2.split("");
    let stringsAsOne=firstArray.concat(secondArray);
    //alphabetize the new array
    stringsAsOne.sort();
    //remove any duplicates and convert to a string then return
    let finalConversion= [...new Set(stringsAsOne)];
    return finalConversion.join('')
  }
  
  //given to strings, s1 and s2, including letters from a to z, all lower case
  //return as a new, longest possible, alphabetical string by combining s1 and s2, no character/letter should repeat
  //input('aaaaaaaa', 'bbbbbbbbbb') output('ab'); input('abcdef', 'ghijklm') output('abcdefghijklm')