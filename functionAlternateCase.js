// Write function alternateCase which switch every letter in string from upper to lower and from lower to upper.

function alternateCase(s) {
    //create an emtpy string (bizarroS); loop through s; use a conditional to change the substring to the opposite and
    //add it to bizarroS; return bizzaroS
    let bizarroS = "";
    
    for(let i=0; i<s.length; i++){
      if(s[i]===s[i].toLowerCase()){
        bizarroS = bizarroS+s[i].toUpperCase();
      }else{
        bizarroS = bizarroS+s[i].toLowerCase();
      }
    };
    return bizarroS
}

//given a string that may consist of lowercase and uppercase letters
//return a string that is the result of changing any lowercase strings to uppercase and vice versa
//console.log(alternateCase("abc"), "ABC");
//console.log(alternateCase("ABC"), "abc");
//console.log(alternateCase("Hello World"), "hELLO wORLD");