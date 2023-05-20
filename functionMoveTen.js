// Move every letter in the provided string forward 10 letters through the alphabet.

// If it goes past 'z', start again at 'a'.

// Input will be a string with length > 0.

function moveTen(s){
    //change the string into an array; create an empty array; loop through the array; change the element into a number
    //using ASCII and add 10; if the number goes over 122, subtract 26 and push the decimal to the empty array after
    //changing back to a letter; else change the letter into its decimal and add 10, push to array; return after changing
    //back to a string
    
    let arrOfS = s.split("");
    
    let changed = [];
    
    for(let i=0; i<arrOfS.length; i++){
      let num = arrOfS[i].charCodeAt(0)+10-97
      if(num>25){
        let alpha = String.fromCharCode(num-26+97);
        changed.push(alpha)
      }else{
        changed.push(String.fromCharCode(num+97));
      }
    };
    return changed.join("")
}

//given a string of letters
//return a string of letters with each letter being 10 in front of the letter in the given string; loop back to the 
//beginning if the end of the alphabet is hit
//console.log(moveTen("testcase"), "docdmkco");
//console.log(moveTen("codewars"), "mynogkbc");
//console.log(moveTen("exampletesthere"), "ohkwzvodocdrobo");