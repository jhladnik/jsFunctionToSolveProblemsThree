var repeatedSubstringPattern = function(s) {
    //change the string to an array; create a new Set (arrSet) of the array; create a string from the elements in the array added together; use a conditional to see if s.length % the new string length !== 0, if this is true, return false, else, find the s.length/ the new created string; create a new string using the repeat method; return if this is equal to the original string or not
    let arr = s.split("");
    let arrSet = [...new Set(arr)];

    let str = "";

    for(let i=0; i<arrSet.length; i++){
        str = str+arrSet[i];
    };

    if (s.length % str.length !== 0 || s.length<2){
        return false;
    }else{
        let repeated = str.repeat(s.length/str.length);
        return repeated === s ? true:false
    }
};

//given a string of letters
//return true if the string is a repeated substring pattern; return false if it is not
//console.log(repeatedSubstringPattern("abab"), true);
//console.log(repeatedSubstringPattern("aba"), false);
//console.log(repeatedSubstringPattern("abcabcabcabc"), true);