// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
// For example:

// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.

function solve(s){
    //array to hold uppercase
    let yupper = [];
    //lowercase array
    let dropIt = [];
    //feeling loopy
    for (let i=0; i<s.length; i++){
      //is it tall or short
      if(s.charAt(i)==s.charAt(i).toUpperCase()){
        yupper.push(i);
      }else{
        dropIt.push(i)
      }
    }
    //who has more???
    if((yupper.length+1)<=(dropIt.length+1)){
      return s.toLowerCase();
    }else{
      return s.toUpperCase();
    }
}
  
//given a string of letters in uppercase and lowercase without knowing which letter is which case
//return the string to be all one case, whether it be lower or upper; change it to uppercase if it takes
//less changes to the string, change it to lowercase if it takes less changes to the strinng or if there are equal letters upper and lower case
//input("PrEsto"), output("presto"); input("CHANGeO"), output("CHANGEO")