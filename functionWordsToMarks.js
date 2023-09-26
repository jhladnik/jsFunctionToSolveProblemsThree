// If　a = 1, b = 2, c = 3 ... z = 26

// Then l + o + v + e = 54

// and f + r + i + e + n + d + s + h + i + p = 108

// So friendship is twice as strong as love :-)

// Your task is to write a function which calculates the value of a word based off the sum of the alphabet positions of its characters.

// The input will always be made of only lowercase letters and will never be empty.

function wordsToMarks(string){
    //split the string into an array of strings; map through the new array and give each their appropriate unicode - 96
    //sum the new array and return
    
    let arrOfString = string.split("");
    
    let toNums = arrOfString.map(el=>{
      return el.charCodeAt(0) - 96;
    });
    
    let sum = 0;
    
    for(let i=0; i<toNums.length; i++){
      sum+=toNums[i];
    };
    
    return sum
}

//given a string of only lowercased letters
//return the sum of the string if the string's substrings were equal to their place in the alphabet
//console.log(wordsToMarks("attitude"), 100);
//console.log(wordsToMarks("selfness"), 99);
//console.log(wordsToMarks("family"), 66);