// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str){
    //create an array to hold the new strings
    let arrHolder = [];
    //change the og string into an array
    let ogStr = str.split("");
    if(ogStr.length%2==1){
      ogStr.push('_')
    }
    for (let i=0; i<=ogStr.length; i++){
    //create a loop to run through the array  
      for(let strs in ogStr){
        arrHolder.push(ogStr.splice(0,2).join(""));
      }
    }
    return arrHolder
  }
  
  //given a string of letters
  //return multiple strings in an array that are each 2 characters long and make up the original string; if one of the strings only has one character, it should be followed by a _
  //input("abcdefg"), output(['ab','cd','ef','g_']); input('tyeueoeoeoeo'), output(['ty','eu','eo','eo','eo','eo'])
